const mongoose = require("mongoose");

const castSchema = mongoose.Schema({
  avatar: {
    type: String,
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  character_name: {
    type: String,
    required: "Character Name is required",
  },
  episodes_no: {
    type: Number,
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
    type: String
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    maxlength: [200, "Description length maximum be 200 characters!"],
  },
  image_poster: {
    type: String,
    required: [true, "Poster Image is required"],
  },
  image_thumbnail: {
    type: String,
    required: [true, "Thumbnail image is required"],
  },
  trailer_url: {
    type: String,
    required: [true, "Trailer Url is required"],
  },
  episodes_no: {
    type: Number,
    required: [true, "Episodes Number is required"],
    default: 1,
  },
  videos_no: {
    type: Number,
    required: [true, "Videos Number is required"],
    default: 1,
  },
  director: {
    type: String,
    required: [true, "Creators are required"],
  },
  starrers: {
    type: String,
    required: [true, "Starrers are required"],
  },
  rating: {
    type: String,
  },
  watch_listed: {
    type: Boolean,
    default: false,
  },
  rated: {
    type: Boolean,
    default: false,
  },
  release_date: {
    type: String,
    required: [true, "Release Date is required"],
  },
  casts: {
    type: [castSchema],
  },
});

module.exports = Movie = new mongoose.model("Movie", movieSchema);
