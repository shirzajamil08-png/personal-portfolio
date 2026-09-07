/* =========================================================
   api/index.js — Vercel serverless entry point for the API

   Vercel turns this file into a function that answers every /api/* request.
   Locally this file is unused; server/server.js runs instead.
   ========================================================= */
const { createApp, mountErrorHandlers } = require("../server/app");
const { connectDB } = require("../server/config/db");

const app = mountErrorHandlers(createApp());

/* A serverless function can be frozen and thawed between requests, so we cache
   the connection promise on the global object: a warm instance reuses the open
   socket instead of dialling MongoDB again on every request.

   Connecting through server/config/db.js (rather than importing mongoose here)
   matters — it guarantees the models and the connection share one mongoose
   instance even if the module resolves from a different node_modules folder. */
let cache = global._dbCache;
if (!cache) cache = global._dbCache = { promise: null };

function connectOnce() {
  if (!cache.promise) {
    cache.promise = connectDB().then((conn) => {
      if (!conn) cache.promise = null; // failed: let the next request retry
      return conn;
    });
  }
  return cache.promise;
}

module.exports = async (req, res) => {
  await connectOnce();
  return app(req, res);
};
