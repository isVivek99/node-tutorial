const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      console.log("error caught");
      next(error);
    }
  };
};

module.exports = asyncWrapper;
