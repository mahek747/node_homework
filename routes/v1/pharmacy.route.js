const express = require("express");
const { pharmacyController } = require("../../controllers");

const router = express.Router();

router.post(
    "/create-pharmacy",
    pharmacyController.createPharmacy
);
router.get(
    "/pharmacy-list",
    pharmacyController.getPharmacyList
);
router.delete(
    "/delete-pharmacy/:pharmacyId",
    pharmacyController.deletepharmacy
  );

  module.exports = router;