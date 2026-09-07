/* =========================================================
   app.js — builds the Express app (no listening here).
   Used by:
     server.js      local development (listens on a port)
     api/index.js   Vercel serverless function
   ========================================================= */
const express = require("express");
const cors = require("cors");

const { isDbConnected } = require("./config/db");
const messageRoutes = require("./routes/messageRoutes");
const projectRoutes = require("./routes/projectRoutes");
const { notFound, errorHandler } = require("./middleware/errorHandler");

function createApp() {
  const app = express();

  app.use(cors({ origin: process.env.CLIENT_ORIGIN || "*" }));
  app.use(express.json({ limit: "100kb" }));
  app.use(express.urlencoded({ extended: true }));

  app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
  });

  app.get("/api/health", (req, res) => {
    res.json({
      success: true,
      status: "API is running",
      database: isDbConnected() ? "connected" : "disconnected",
      time: new Date().toISOString()
    });
  });

  app.use("/api/messages", messageRoutes);
  app.use("/api/projects", projectRoutes);

  return app;
}

/* Mounted last, after any static-file handling the caller adds, so the 404
   only fires once nothing else has matched. */
function mountErrorHandlers(app) {
  app.use(notFound);
  app.use(errorHandler);
  return app;
}

module.exports = { createApp, mountErrorHandlers };
