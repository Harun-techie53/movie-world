const mongoose = require("mongoose");

const castSchema = mongoose.Schema({
  avatar: {
    type: String,
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  episodes_no: {
    type: Number,
    required: [true, "Episodes Number is required"],
  },
  working_year: {
    type: Number,
  },
});

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  genres: {
    type: [String],
    required: [true, "Genres is required"],
    lowercase: true,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    maxlength: [200, "Description length maximum be 200 characters!"],
  },
  episodes_no: {
    type: Number,
    required: [true, "Episodes Number is required"],
  },
  videos_no: {
    type: Number,
    required: [true, "Videos Number is required"],
  },
  photos_no: {
    type: Number,
    required: [true, "Photos Number is required"],
  },
  creators: {
    type: [String],
    required: [true, "Creators are required"],
  },
  starrers: {
    type: [String],
    required: [true, "Starrers are required"],
  },
  rating: {
    type: Number,
    default: 3.5,
    max: 5,
  },
  watch_listed: {
    type: Boolean,
    default: false,
  },
  release_date: {
    type: Number,
    required: [true, "Release Date is required"],
  },
  casts: {
    type: [castSchema],
  },
});

module.exports = Movie = new mongoose.model("Movie", movieSchema);
