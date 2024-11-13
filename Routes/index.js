const express = require("express");
const userRoutes = require("./users");
const roleRoutes = require("./roles");
const brandRoutes = require("./brands");
const modelRoutes = require("./models");
const vehicleRoutes = require('./vehicles')
const orderRoutes = require("./orders");
const reviewRoutes = require('./reviews');
const bookingRoutes = require("./bookings");
const paymentRoutes = require("./payments");
const notificationRoutes = require("./notifications");

const router = express.Router();

router.use("/user", userRoutes);
router.use("/role", roleRoutes);
router.use("/brand", brandRoutes);
router.use("/model", modelRoutes);
router.use("/vehicle", vehicleRoutes);
router.use("/order", orderRoutes);
router.use("/review", reviewRoutes);
router.use("/booking", bookingRoutes);
router.use("/payment", paymentRoutes);
router.use("/notification", notificationRoutes);

module.exports = router;
