require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const app = require('./app');

//Caught the error due to uncaught promise rejection
process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  process.exit(1);
});

connectDB();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}...`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  process.exit(1);
});
