const catchAsync = require("../utils/catchAsync");
const Movie = require("../models/movieModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");

exports.getMovies = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Movie.find(), req.query)
    .filter()
    .sort()
    .paginate()
    .fields();
  const movies = await features.query;

  res.status(200).json({
    status: "success",
    result: movies.length,
    data: {
      movies,
    },
  });
});

exports.getMovie = catchAsync(async (req, res, next) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie) {
    const err = new AppError("Movie not found!", 404);

    return next(err);
  }

  res.status(200).json({
    status: "success",
    data: {
      movie,
    },
  });
});

exports.createMovie = catchAsync(async (req, res, next) => {
  const {
    title,
    genres,
    description,
    episodes_no,
    videos_no,
    photos_no,
    director,
    starrers,
    rating,
    watch_listed,
    rated,
    release_date,
    casts,
    image_poster,
    image_thumbnail,
    trailer_url,
  } = req.body;

  const movie = new Movie({
    title,
    genres,
    description,
    episodes_no,
    videos_no,
    photos_no,
    director,
    starrers,
    rating,
    watch_listed,
    rated,
    release_date,
    casts,
    image_poster,
    image_thumbnail,
    trailer_url,
  });

  await movie.save();

  res.status(201).json({
    status: "success",
    data: {
      movie,
    },
  });
});

exports.updateMovie = catchAsync(async (req, res, next) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!movie) {
    const err = new AppError("Movie not found!", 404);

    return next(err);
  }

  res.status(200).json({
    status: "success",
    data: {
      movie,
    },
  });
});
