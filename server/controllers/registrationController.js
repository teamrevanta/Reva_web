const Razorpay = require('razorpay');
const crypto = require('crypto');
const Registration = require('../models/registration');
const axios = require('axios');

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

        // Check if email already exists
        const existingUser = await Registration.findOne({ email });
        if (existingUser) {
            if (existingUser.paymentStatus === 'completed') {
                return res.status(400).json({ error: 'Email already registered with completed payment' });
            } else {
                // Optionally, delete the pending registration to allow a retry
                await Registration.deleteOne({ email, paymentStatus: 'pending' });
            }
        }

        // Check if files are uploaded and have path
        if (!req.files || !req.files.idCardImage || !req.files.idCardImage[0] || !req.files.idCardImage[0].path ||
            !req.files.memberImage || !req.files.memberImage[0] || !req.files.memberImage[0].path) {
            return res.status(400).json({ error: 'Both ID card and member images are required and must be uploaded to Cloudinary' });
        }

        // Create Razorpay order
        const paymentAmount = 150000; // ₹1500 in paisa
        const order = await razorpay.orders.create({
            amount: paymentAmount,
            currency: 'INR',
            receipt: `reg_${Date.now()}`, // Use a temporary unique receipt
            notes: {
                email: email // Store minimal data in notes
            }
        });

        // Return registration data and order details to client
        res.json({
            success: true,
            orderId: order.id,
            amount: paymentAmount,
            currency: order.currency,
            razorpayKey: process.env.RAZORPAY_KEY_ID,
            registrationData: {
                fullName,
                email,
                branch,
                year: parseInt(year),
                batch,
                firstPriorityDomain,
                secondPriorityDomain,
                tshirtSize,
                nameOnTshirt,
                linkedinId,
                idCardImage: req.files.idCardImage[0].path,
                memberImage: req.files.memberImage[0].path
            }
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
            registrationData
        } = req.body;

        // Verify signature
        const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
        hmac.update(razorpay_order_id + '|' + razorpay_payment_id);
        const generated_signature = hmac.digest('hex');

        if (generated_signature === razorpay_signature) {
            // Verify payment with Razorpay API
            const payment = await razorpay.payments.fetch(razorpay_payment_id);
            if (payment.status === 'captured') {
                // Save registration to database only after successful payment
                const registration = new Registration({
                    ...registrationData,
                    paymentStatus: 'completed',
                    razorpayOrderId: razorpay_order_id,
                    razorpayPaymentId: razorpay_payment_id,
                    registrationDate: new Date()
                });

                await registration.save();
                res.json({ success: true, message: 'Registration completed successfully', registrationId: registration._id });
            } else {
                res.status(400).json({ error: 'Payment not captured' });
            }
        } else {
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