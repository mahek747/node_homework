const express = require("express");
const { busController } = require("../../controllers");

const router = express.Router();

router.post(
    "/create-bus",
    busController.createBus
);
router.get(
    "/bus-list",
    busController.getBusList
);
router.delete(
    "/delete-bus/:busId",
    busController.deletebus
  );

  module.exports = router;