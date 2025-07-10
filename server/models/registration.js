const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema(
  {
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
      lowercase: true,
      validate: {
        validator: function (email) {
          return email.endsWith("@nitjsr.ac.in");
        },
        message: "Email must end with @nitjsr.ac.in",
      },
    },
    branch: {
      type: String,
      required: [true, "Branch is required"],
      trim: true,
    },
    year: {
      type: Number,
      required: [true, "Year is required"],
      min: [1, "Year must be at least 1"],
      max: [4, "Year cannot exceed 4"],
    },
    batch: {
      type: String,
      required: [true, "Batch is required"],
      trim: true,
      enum: {
        values: ["2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"],
        message: "Invalid batch selected",
      },
    },
    firstPriorityDomain: {
      type: String,
      required: [true, "First priority domain is required"],
      enum: {
        values: ["Electrical", "Mechanical", "Web", "Creative", "Content", "Sponsor"],
        message: "Invalid first priority domain selected",
      },
    },
    secondPriorityDomain: {
      type: String,
      required: [true, "Second priority domain is required"], // Now required
      enum: {
        values: ["Electrical", "Mechanical", "Web", "Creative", "Content", "Sponsor"],
        message: "Invalid second priority domain selected",
      },
      validate: {
        validator: function (value) {
          return value !== this.firstPriorityDomain;
        },
        message: "Second priority domain must be different from first priority domain",
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
      required: [true, "LinkedIn ID is required"],
      trim: true,
      validate: {
        validator: function (v) {
          return /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/.test(v);
        },
        message: "Please enter a valid LinkedIn profile URL like https://www.linkedin.com/in/your-id",
      },
    },
    idCardImage: {
      type: String,
      required: [true, "ID card image is required"],
    },
    memberImage: {
      type: String,
      required: [true, "Member image is required"],
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    razorpayOrderId: {
      type: String,
    },
    razorpayPaymentId: {
      type: String,
    },
    registrationDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Registration", registrationSchema);