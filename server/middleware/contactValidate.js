const { body, validationResult } = require("express-validator");

const validateContactForm = [
  body("user_name")
    .trim()
    .notEmpty().withMessage("Name is required")
    .isLength({ min: 2, max: 50 }).withMessage("Name must be between 2 and 50 characters"),

  body("user_email")
    .trim()
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email format"),

  body("user_choice")
    .notEmpty().withMessage("Service selection is required")
    .isIn(["Sponsorship", "Advertisement", "Message"]).withMessage("Invalid service selected"),

  body("message")
    .trim()
    .notEmpty().withMessage("Message is required")
    .isLength({ max: 500 }).withMessage("Message must be less than 500 characters"),

  body("user_phone")
    .optional({ checkFalsy: true })
    .matches(/^\+?\d{10,15}$/).withMessage("Invalid phone number format"),

  // Final error handler
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validateContactForm };