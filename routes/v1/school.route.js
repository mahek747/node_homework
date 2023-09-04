const express = require("express");
const { schoolController } = require("../../controllers");

const router = express.Router();

router.post(
    "/create-school",
    schoolController.createSchool
);
router.get(
    "/school-list",
    schoolController.getSchoolList
);
router.delete(
    "/delete-school/:schoolId",
    schoolController.deleteschool
  );

  module.exports = router;