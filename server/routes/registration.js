const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { validateRegistration } = require('../middleware/validate');
const registrationController = require('../controllers/registrationController');

router.post('/submit', upload.fields([
    { name: 'idCardImage', maxCount: 1 },
    { name: 'memberImage', maxCount: 1 }
]), validateRegistration, registrationController.submitRegistration);

router.post('/verify-payment', registrationController.verifyPayment);

router.get('/:id', registrationController.getRegistration);

module.exports = router;