const mongoose = require("mongoose");

/**
 * Connect to MongoDB Atlas (or any Mongo instance) using MONGODB_URI.
 *
 * The API is designed to keep serving read-only project data even when the
 * database is unreachable, so a failed connection warns instead of exiting.
 * Routes that need the database check `isDbConnected()` first.
 */
async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.warn(
      "\n  MONGODB_URI is not set. Copy server/.env.example to server/.env\n" +
        "   and paste your MongoDB Atlas connection string into it.\n" +
        "   The API will run, but saving messages will be disabled.\n"
    );
    return null;
  }

  try {
    const conn = await mongoose.connect(uri, { serverSelectionTimeoutMS: 10000 });
    console.log(`MongoDB connected: ${conn.connection.host}/${conn.connection.name}`);
    return conn;
  } catch (err) {
    console.error(`MongoDB connection failed: ${err.message}`);
    console.error("Check your connection string, password, and Atlas IP access list.");
    return null;
  }
}

/** 1 === connected, per mongoose readyState */
function isDbConnected() {
  return mongoose.connection.readyState === 1;
}

module.exports = { connectDB, isDbConnected };
