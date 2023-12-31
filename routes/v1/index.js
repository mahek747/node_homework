const express = require("express");

const busRoute = require('./bus.route')
const userRoute = require("./user.route");
// const bookRoute = require("./book.route");
const hotelRoute = require("./hotel.route");
const groceryRoute = require("./grocery.route");
const jewelleryRoute = require("./jewellery.route");
const movieRoute = require('./movie.route');
const musicRoute = require('./music.route');
const pharmacyRoute = require('./pharmacy.route');
const schoolRoute = require('./school.route');
const stationaryRoute = require('./stationary.route');
const travelRoute = require('./travel.route');

const router = express.Router();

router.use("/bus" , busRoute);
router.use("/user", userRoute);
// router.use("/book", bookRoute);
router.use("/hotel", hotelRoute);
router.use("/grocery", groceryRoute);
router.use("/jewellery" , jewelleryRoute);
router.use("/movie" , movieRoute);
router.use("/music" , musicRoute);
router.use("/pharmacy" , pharmacyRoute);
router.use("/school" , schoolRoute);
router.use("/stationary" , stationaryRoute);
router.use("/travel" , travelRoute);

module.exports = router;