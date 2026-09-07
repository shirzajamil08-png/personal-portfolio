/**
 * Very small gate for the write/read-inbox routes.
 * Send the key as an `x-admin-key` header; it must match ADMIN_KEY in .env.
 *
 * This is deliberately simple for a student project. For anything public-facing,
 * swap it for JWT auth with hashed passwords.
 */
function adminAuth(req, res, next) {
  const expected = process.env.ADMIN_KEY;

  if (!expected) {
    return res.status(500).json({
      success: false,
      message: "ADMIN_KEY is not set on the server."
    });
  }

  if (req.header("x-admin-key") !== expected) {
    return res.status(401).json({ success: false, message: "Unauthorized." });
  }

  next();
}

module.exports = adminAuth;
