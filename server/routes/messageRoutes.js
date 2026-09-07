const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth");
const {
  createMessage,
  getMessages,
  deleteMessage
} = require("../controllers/messageController");

router
  .route("/")
  .post(createMessage)          // public: the contact form
  .get(adminAuth, getMessages); // admin: read the inbox

router.delete("/:id", adminAuth, deleteMessage);

module.exports = router;
