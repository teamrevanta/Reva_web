const Razorpay = require('razorpay');
const crypto = require('crypto');
const Registration = require('../models/registration');
const axios = require('axios');

if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    throw new Error('Razorpay key_id or key_secret is missing in environment variables');
}

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

exports.submitRegistration = async (req, res) => {
    try {
        const {
            fullName,
            email,
            branch,
            year,
            batch,
            firstPriorityDomain,
            secondPriorityDomain,
            tshirtSize,
            nameOnTshirt,
            linkedinId
        } = req.body;

        // Log the full req.files object
        console.log('req.files:', JSON.stringify(req.files, null, 2));

        // Check if email already exists
        const existingUser =  await Registration.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already registered' });
        }

        // Check if files are uploaded and have path
        if (!req.files || !req.files.idCardImage || !req.files.idCardImage[0] || !req.files.idCardImage[0].path ||
            !req.files.memberImage || !req.files.memberImage[0] || !req.files.memberImage[0].path) {
            return res.status(400).json({ error: 'Both ID card and member images are required and must be uploaded to Cloudinary' });
        }

        // Create registration entry
        const registration = new Registration({
            fullName,
            email,
            branch,
            year: parseInt(year),
            batch,
            firstPriorityDomain,
            secondPriorityDomain, // Handle empty string
            tshirtSize,
            nameOnTshirt,
            linkedinId,
            idCardImage: req.files.idCardImage[0].path,
            memberImage: req.files.memberImage[0].path
        });

        await registration.save();

        // Create Razorpay order
        const paymentAmount = 150000; // ₹1500 in paisa
        const order = await razorpay.orders.create({
            amount: paymentAmount,
            currency: 'INR',
            receipt: `reg_${registration._id}`,
            notes: {
                registrationId: registration._id.toString(),
                email: email
            }
        });

        // Update registration with order ID
        registration.razorpayOrderId = order.id;
        await registration.save();

        res.json({
            success: true,
            orderId: order.id,
            amount: paymentAmount,
            currency: order.currency,
            registrationId: registration._id,
            razorpayKey: process.env.RAZORPAY_KEY_ID
        });

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: error.message, details: error.errors });
    }
};

exports.verifyPayment = async (req, res) => {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            registrationId
        } = req.body;

        // Verify signature
        const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
        hmac.update(razorpay_order_id + '|' + razorpay_payment_id);
        const generated_signature = hmac.digest('hex');

        if (generated_signature === razorpay_signature) {
            // Verify payment with Razorpay API
            const payment = await razorpay.payments.fetch(razorpay_payment_id);
            if (payment.status === 'captured') {
                await Registration.findByIdAndUpdate(registrationId, {
                    paymentStatus: 'completed',
                    razorpayPaymentId: razorpay_payment_id
                });
                res.json({ success: true, message: 'Registration completed successfully' });
            } else {
                await Registration.findByIdAndUpdate(registrationId, {
                    paymentStatus: 'failed'
                });
                res.status(400).json({ error: 'Payment not captured' });
            }
        } else {
            await Registration.findByIdAndUpdate(registrationId, {
                paymentStatus: 'failed'
            });
            res.status(400).json({ error: 'Invalid payment signature' });
        }
    } catch (error) {
        console.error('Payment verification error:', error);
        res.status(500).json({ error: 'Payment verification failed' });
    }
};

exports.getRegistration = async (req, res) => {
    try {
        const registration = await Registration.findById(req.params.id);
        if (!registration) {
            return res.status(404).json({ error: 'Registration not found' });
        }
        res.json(registration);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};