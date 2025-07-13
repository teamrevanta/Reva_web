const Registration = require('../models/registration');

exports.submitRegistration = async (req, res) => {
    console.log('Entering submitRegistration');
    console.log('Request body:', req.body);
    console.log('Request files:', req.files);

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

        console.log(`Checking for existing user with email: ${email}`);
        const existingUser = await Registration.findOne({ email });
        if (existingUser) {
            console.log(`Existing user found: ${existingUser._id}, paymentStatus: ${existingUser.paymentStatus}`);
            if (existingUser.paymentStatus === 'completed') {
                return res.status(400).json({ error: 'Email already registered with completed payment' });
            } else {
                console.log(`Deleting pending registration for email: ${email}`);
                await Registration.deleteOne({ email, paymentStatus: 'pending' });
            }
        }

        console.log('Validating uploaded files');
        if (!req.files || !req.files.idCardImage || !req.files.idCardImage[0] || !req.files.idCardImage[0].path ||
            !req.files.memberImage || !req.files.memberImage[0] || !req.files.memberImage[0].path ||
            !req.files.paymentScreenshot || !req.files.paymentScreenshot[0] || !req.files.paymentScreenshot[0].path) {
            console.log('Missing required files:', {
                idCardImage: req.files?.idCardImage,
                memberImage: req.files?.memberImage,
                paymentScreenshot: req.files?.paymentScreenshot
            });
            return res.status(400).json({ error: 'ID card, member image, and payment screenshot are required' });
        }

        console.log('Creating new registration');
        const registration = new Registration({
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
            memberImage: req.files.memberImage[0].path,
            paymentScreenshot: req.files.paymentScreenshot[0].path,
            paymentStatus: 'completed',
            registrationDate: new Date()
        });

        console.log('Saving registration to MongoDB');
        await registration.save();
        console.log('Registration saved, ID:', registration._id);
        res.json({ success: true, message: 'Registration completed', registrationId: registration._id });

    } catch (error) {
        console.error('Registration error:', {
            message: error.message,
            stack: error.stack,
            code: error.code,
            errors: error.errors || error
        });
        res.status(500).json({
            error: 'Registration failed',
            details: error.message,
            stack: error.stack,
            validationErrors: error.errors
        });
    }
};

exports.getRegistration = async (req, res) => {
    console.log(`Fetching registration with ID: ${req.params.id}`);
    try {
        const registration = await Registration.findById(req.params.id);
        if (!registration) {
            console.log('Registration not found');
            return res.status(404).json({ error: 'Registration not found' });
        }
        res.json(registration);
    } catch (error) {
        console.error('Get registration error:', {
            message: error.message,
            stack: error.stack
        });
        res.status(500).json({ error: error.message });
    }
};