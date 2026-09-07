/* =========================================================
   server.js — runs the API locally
   Node.js + Express + Mongoose (local MongoDB or Atlas)

     npm install
     npm run dev      -> nodemon, http://localhost:5000
     npm start        -> plain node
     npm run seed     -> load the starter projects into MongoDB

   On Vercel this file is not used; api/index.js is the entry point.
   ========================================================= */
require("dotenv").config({ path: require("path").join(__dirname, ".env") });

const path = require("path");
const express = require("express");

const { connectDB } = require("./config/db");
const { createApp, mountErrorHandlers } = require("./app");

const PORT = process.env.PORT || 5000;
const app = createApp();

/* Serve the built React app in production, so one process hosts both. */
if (process.env.NODE_ENV === "production") {
  const dist = path.join(__dirname, "..", "client", "dist");
  app.use(express.static(dist));
  app.get("*", (req, res) => res.sendFile(path.join(dist, "index.html")));
}

mountErrorHandlers(app);

connectDB().finally(() => {
  app.listen(PORT, () => {
    console.log(`API listening on http://localhost:${PORT}`);
    console.log(`Health check:     http://localhost:${PORT}/api/health`);
  });
});
