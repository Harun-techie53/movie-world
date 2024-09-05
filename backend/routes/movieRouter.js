const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router
  .route("/")
  .get(movieController.getMovies)
  .post(movieController.createMovie);

router
  .route("/:id")
  .get(movieController.getMovie)
  .patch(movieController.updateMovie);

module.exports = router;
