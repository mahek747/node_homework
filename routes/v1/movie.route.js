const express = require("express");
const { movieController } = require("../../controllers");

const router = express.Router();

router.post(
    "/create-movie",
    movieController.createMovie
);
router.get(
    "/movie-list",
    movieController.getMovieList
);
router.delete(
    "/delete-movie/:movieId",
    movieController.deletemovie
  );

  module.exports = router;