const express = require("express");
const { jewelleryController } = require("../../controllers");

const router = express.Router();

router.post(
    "/create-jewellery",
    jewelleryController.createJewellery
);
router.get(
    "/jewellery-list",
    jewelleryController.getJewelleryList
);
router.delete(
    "/delete-jewellery/:jewellerylId",
    jewelleryController.deletejewellery
  );

  module.exports = router;