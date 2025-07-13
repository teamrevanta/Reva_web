const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { validateRegistration } = require('../middleware/validate');
const registrationController = require('../controllers/registrationController');

router.post('/submit', upload, validateRegistration, registrationController.submitRegistration);
router.get('/:id', registrationController.getRegistration);

module.exports = router;