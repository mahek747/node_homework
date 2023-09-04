const express = require("express");
const { travelController } = require("../../controllers");

const router = express.Router();

router.post(
    "/create-travel",
    travelController.createtravel
);
router.get(
    "/travel-list",
    travelController.getTravelList
);
router.delete(
    "/delete-travel/:travelId",
    travelController.deletetarvel
  );

  module.exports = router;