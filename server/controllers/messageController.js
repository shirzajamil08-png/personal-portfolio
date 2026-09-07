const Message = require("../models/Message");
const { isDbConnected } = require("../config/db");

/**
 * POST /api/messages
 * Save a contact-form submission.
 * Validation lives in the Mongoose schema, so bad input never reaches the DB.
 */
async function createMessage(req, res, next) {
  try {
    if (!isDbConnected()) {
      return res.status(503).json({
        success: false,
        message: "Database is not connected. Set MONGODB_URI in server/.env."
      });
    }

    const { name, email, subject, message } = req.body;
    const saved = await Message.create({ name, email, subject, message });

    res.status(201).json({
      success: true,
      message: "Thanks! Your message has been received.",
      data: { id: saved._id, createdAt: saved.createdAt }
    });
  } catch (err) {
    // turn Mongoose validation errors into a field -> message map the form can use
    if (err.name === "ValidationError") {
      const errors = {};
      for (const key of Object.keys(err.errors)) errors[key] = err.errors[key].message;
      return res.status(400).json({ success: false, message: "Please fix the highlighted fields.", errors });
    }
    next(err);
  }
}

/**
 * GET /api/messages  (admin only)
 * Read the inbox. Requires the x-admin-key header to match ADMIN_KEY.
 */
async function getMessages(req, res, next) {
  try {
    if (!isDbConnected()) {
      return res.status(503).json({ success: false, message: "Database is not connected." });
    }

    const messages = await Message.find().sort({ createdAt: -1 }).limit(100);
    res.json({ success: true, count: messages.length, data: messages });
  } catch (err) {
    next(err);
  }
}

/** DELETE /api/messages/:id  (admin only) */
async function deleteMessage(req, res, next) {
  try {
    if (!isDbConnected()) {
      return res.status(503).json({ success: false, message: "Database is not connected." });
    }

    const removed = await Message.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ success: false, message: "Message not found." });

    res.json({ success: true, message: "Message deleted." });
  } catch (err) {
    next(err);
  }
}

module.exports = { createMessage, getMessages, deleteMessage };
