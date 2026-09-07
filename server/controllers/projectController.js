const Project = require("../models/Project");
const { isDbConnected } = require("../config/db");

/**
 * GET /api/projects
 * Public list of projects, newest ordering first by `order` then creation date.
 * Returns an empty array (not an error) when the DB is down, so the React app
 * can quietly fall back to its bundled copy of the data.
 */
async function getProjects(req, res, next) {
  try {
    if (!isDbConnected()) {
      return res.json({ success: true, source: "unavailable", count: 0, data: [] });
    }

    const projects = await Project.find().sort({ order: 1, createdAt: 1 });
    res.json({ success: true, source: "mongodb", count: projects.length, data: projects });
  } catch (err) {
    next(err);
  }
}

/** POST /api/projects  (admin only) */
async function createProject(req, res, next) {
  try {
    if (!isDbConnected()) {
      return res.status(503).json({ success: false, message: "Database is not connected." });
    }

    const project = await Project.create(req.body);
    res.status(201).json({ success: true, data: project });
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({ success: false, message: err.message });
    }
    next(err);
  }
}

/** PUT /api/projects/:id  (admin only) */
async function updateProject(req, res, next) {
  try {
    if (!isDbConnected()) {
      return res.status(503).json({ success: false, message: "Database is not connected." });
    }

    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!project) return res.status(404).json({ success: false, message: "Project not found." });

    res.json({ success: true, data: project });
  } catch (err) {
    next(err);
  }
}

/** DELETE /api/projects/:id  (admin only) */
async function deleteProject(req, res, next) {
  try {
    if (!isDbConnected()) {
      return res.status(503).json({ success: false, message: "Database is not connected." });
    }

    const removed = await Project.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ success: false, message: "Project not found." });

    res.json({ success: true, message: "Project deleted." });
  } catch (err) {
    next(err);
  }
}

module.exports = { getProjects, createProject, updateProject, deleteProject };
