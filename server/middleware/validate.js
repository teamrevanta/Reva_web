const { body, validationResult } = require("express-validator");
const validateRegistration = [
  body("fullName")
    .trim()
    .notEmpty().withMessage("Full name is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("Full name must be between 2 and 50 characters"),

  body("email")
    .trim()
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email format")
    .custom(value => value.endsWith("@nitjsr.ac.in"))
    .withMessage("Email must end with @nitjsr.ac.in"),

  body("branch")
    .notEmpty().withMessage("Branch is required")
    .isIn(["CE", "CSE", "ECE", "EE", "ME", "PI", "ECM", "MM"])
    .withMessage("Invalid branch selected"),

  body("year")
    .isInt({ min: 1, max: 4 })
    .withMessage("Year must be between 1 and 4"),

  body("batch")
    .trim()
    .notEmpty().withMessage("Batch is required")
    .isIn(["2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"])
    .withMessage("Invalid batch selected"),

  body("firstPriorityDomain")
    .notEmpty().withMessage("First priority domain is required")
    .isIn([
        "Electrical",
        "Manufacturing",
        "Corporate Affairs",
        "Innovation",
        "Web Designing",
        "Content & Creative",
      ])
    .withMessage("Please select a valid first priority domain"),

  body("secondPriorityDomain")
    .notEmpty().withMessage("Second priority domain is required")
    .isIn([
        "Electrical",
        "Manufacturing",
        "Corporate Affairs",
        "Innovation",
        "Web Designing",
        "Content & Creative",
      ])
    .withMessage("Please select a valid second priority domain")
    .custom((value, { req }) => {
      if (value === req.body.firstPriorityDomain) {
        throw new Error("Second priority domain must be different from first priority domain");
      }
      return true;
    }),

  body("tshirtSize")
    .isIn(["XS", "S", "M", "L", "XL", "XXL"])
    .withMessage("Please select a valid T-shirt size"),

  body("nameOnTshirt")
    .trim()
    .notEmpty().withMessage("Name on T-shirt is required")
    .isLength({ max: 20 })
    .withMessage("Name on T-shirt must be less than or equal to 20 characters"),

  body("linkedinId")
    .trim()
    .notEmpty()
    .withMessage("LinkedIn profile URL is required")
    .matches(/^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/)
    .withMessage("Please enter a valid LinkedIn profile URL like https://www.linkedin.com/in/your-id"),

  body("paymentScreenshot")
    .custom((value, { req }) => {
      if (!req.files || !req.files.paymentScreenshot || !req.files.paymentScreenshot[0]) {
        throw new Error("Payment screenshot is required");
      }
      return true;
    }),

  // Final error handler
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validateRegistration };