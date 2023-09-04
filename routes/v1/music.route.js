const express = require("express");
const { musicController } = require("../../controllers");

const router = express.Router();

router.post(
    "/create-music",
    musicController.createMusic
);
router.get(
    "/bus-list",
    musicController.getMusicList
);
router.delete(
    "/delete-music/:musicId",
    musicController.deletemusic
  );

  module.exports = router;