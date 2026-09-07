const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth");
const {
  getProjects,
  createProject,
  updateProject,
  deleteProject
} = require("../controllers/projectController");

router
  .route("/")
  .get(getProjects)                // public: the Projects section
  .post(adminAuth, createProject); // admin

router
  .route("/:id")
  .put(adminAuth, updateProject)
  .delete(adminAuth, deleteProject);

module.exports = router;
