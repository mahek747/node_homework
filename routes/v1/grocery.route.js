const express = require("express");
const { groceryController } = require("../../controllers");

const router = express.Router();

router.post(
    "/create-grocery",
    groceryController.createGrocery
);
router.get(
    "/grocery-list",
    groceryController.getGroceryList
);
router.delete(
    "/delete-grocery/:groceryId",
    groceryController.deletegrocery
  );

  module.exports = router;