const express = require("express");
const userRoutes = require("./users");
const roleRoutes = require("./roles");
const brandRoutes = require("./brands");
const modelRoutes = require("./models");
const vehicleRoutes = require("./vehicles");
const orderRoutes = require("./orders");
const reviewRoutes = require("./reviews");
const bookingRoutes = require("./bookings");
const paymentRoutes = require("./payments");
const notificationRoutes = require("./notifications");
const moduleRoutes = require("./modules");
const promoCodeRoutes = require("./promo_codes");
const favouriteRoutes = require("./favourites");
const cityRoutes = require("./cities");
const partnerRequestRoutes = require("./partner_requests");

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
router.use("/module", moduleRoutes);
router.use("/promo_code", promoCodeRoutes);
router.use("/favourite", favouriteRoutes);
router.use("/city", cityRoutes);
router.use("/partner_request", partnerRequestRoutes);

module.exports = router;
