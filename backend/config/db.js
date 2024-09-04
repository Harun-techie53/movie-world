const mongoose = require("mongoose");

const DB = process.env.DATABASE_REMOTE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

const connectDB = async () => {
  try {
    await mongoose.connect(DB);
    console.log("Database Connected...");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
