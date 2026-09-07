const mongoose = require("mongoose");

/** A message submitted through the portfolio contact form. */
const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [80, "Name is too long"]
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Please enter a valid email address"]
    },
    subject: {
      type: String,
      required: [true, "Subject is required"],
      trim: true,
      minlength: [3, "Subject must be at least 3 characters"],
      maxlength: [120, "Subject is too long"]
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      minlength: [10, "Message should be at least 10 characters"],
      maxlength: [2000, "Message is too long"]
    },
    read: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
