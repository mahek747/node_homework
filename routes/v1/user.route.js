const express = require("express");
const { userValidation } = require("../../validators");
// const { userController } = require("../../controllers");
// const validate = require("../../middlewares/validate");

const router = express.Router();

/** create user */
router.post(
  "/create-user",
  userController.createUser
);


module.exports = router;