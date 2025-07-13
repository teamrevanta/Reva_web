const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full name is required"],
    trim: true,
    minlength: [2, "Full name must be at least 2 characters"],
    maxlength: [50, "Full name cannot exceed 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"],
    validate: {
      validator: function (v) {
        return v.endsWith("@nitjsr.ac.in");
      },
      message: "Email must end with @nitjsr.ac.in",
    },
  },
  branch: {
    type: String,
    required: [true, "Branch is required"],
    enum: {
      values: ["CE", "CSE", "ECE", "EE", "ME", "PI", "ECM", "MM"],
      message: "Invalid branch selected",
    },
  },
  year: {
    type: Number,
    required: [true, "Year is required"],
    min: [1, "Year must be between 1 and 4"],
    max: [4, "Year must be between 1 and 4"],
  },
  batch: {
    type: String,
    required: [true, "Batch is required"],
    enum: {
      values: ["2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"],
      message: "Invalid batch selected",
    },
  },
  firstPriorityDomain: {
    type: String,
    required: [true, "First priority domain is required"],
    enum: {
      values: [
        "Electrical",
        "Manufacturing",
        "Corporate Affairs",
        "Innovation",
        "Web Designing",
        "Content & Creative",
      ],
      message: "Invalid first priority domain selected",
    },
  },
  secondPriorityDomain: {
    type: String,
    required: [true, "Second priority domain is required"],
    enum: {
      values: [
        "Electrical",
        "Manufacturing",
        "Corporate Affairs",
        "Innovation",
        "Web Designing",
        "Content & Creative",
      ],
      message: "Invalid second priority domain selected",
    },
    validate: {
      validator: function (v) {
        return v !== this.firstPriorityDomain;
      },
      message:
        "Second priority domain must be different from first priority domain",
    },
  },
  tshirtSize: {
    type: String,
    required: [true, "T-shirt size is required"],
    enum: {
      values: ["XS", "S", "M", "L", "XL", "XXL"],
      message: "Invalid T-shirt size selected",
    },
  },
  nameOnTshirt: {
    type: String,
    required: [true, "Name on T-shirt is required"],
    trim: true,
    maxlength: [20, "Name on T-shirt cannot exceed 20 characters"],
  },
  linkedinId: {
    type: String,
    required: [true, "LinkedIn profile URL is required"],
    trim: true,
    match: [
      /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/,
      "Invalid LinkedIn profile URL",
    ],
  },
  idCardImage: {
    type: String,
    required: [true, "College ID card image is required"],
  },
  memberImage: {
    type: String,
    required: [true, "Member image is required"],
  },
  paymentScreenshot: {
    type: String,
    required: [true, "Payment screenshot is required"],
  },
  paymentStatus: {
    type: String,
    required: [true, "Payment status is required"],
    enum: ["pending", "completed"],
    default: "completed",
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Registration", registrationSchema);
