const express = require("express");
const router = express.Router();
const { validateContactForm } = require("../middleware/contactValidate");
const { sendContactEmail } = require("../controllers/contactController");

router.post("/submit", validateContactForm, sendContactEmail);

module.exports = router;