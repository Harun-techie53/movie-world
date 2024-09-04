const express = require("express");
const app = express();
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const globalErrorHandler = require("./controllers/errorController");

//Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Too many requests limiting
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter);

//Body parser
app.use(express.json());

//Undefined Routes Handler
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} in the server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
