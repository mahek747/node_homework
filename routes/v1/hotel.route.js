const express = require("express");
const { hotelController } = require("../../controllers");

const router = express.Router();

router.post(
    "/create-hotel",
    hotelController.createHotel
);
router.get(
    "/hotel-list",
    hotelController.getHotelList
);
router.delete(
    "/delete-hotel/:hotelId",
    hotelController.deletehotel
  );

  module.exports = router;