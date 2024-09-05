const AppError = require("./appError");

const ObjectId = require("mongoose").Types.ObjectId;

module.exports = checkObjectId = (req, res, next) => {
  if (ObjectId.isValid(req.params.id)) {
    if (String(new ObjectId(req.params.id)) === req.params.id) {
      next();
    }
  }

  return next(new AppError("Invalid Object Id", 400));
};
