/** 404 for any unmatched route. */
function notFound(req, res, next) {
  res.status(404).json({ success: false, message: `Route not found: ${req.method} ${req.originalUrl}` });
}

/** Central error handler — every controller forwards here via next(err). */
// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  console.error(err.stack || err.message);

  if (err.name === "CastError") {
    return res.status(400).json({ success: false, message: "Invalid id format." });
  }

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Something went wrong on the server."
  });
}

module.exports = { notFound, errorHandler };
