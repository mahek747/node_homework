const express = require("express");
const { stationaryController } = require("../../controllers");

const router = express.Router();

router.post(
    "/create-stationary",
    stationaryController.createStationary
);
router.get(
    "/stationary-list",
    stationaryController.getStationaryList
);
router.delete(
    "/delete-stationary/:stationaryId",
    stationaryController.deletestationary
  );

  module.exports = router;