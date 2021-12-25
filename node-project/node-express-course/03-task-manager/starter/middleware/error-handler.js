const errorHandlerMiddleware = (error, req, res, next) => {
  console.log(error);
  return res.status(error.status).json({ error: error.message });
};

module.exports = errorHandlerMiddleware;
