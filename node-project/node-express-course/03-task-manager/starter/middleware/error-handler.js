const errorHandlerMiddleware = (err, req, res, next) => {
  return res.status(500).json({ err: err.errors.message });
};

module.exports = errorHandlerMiddleware;
