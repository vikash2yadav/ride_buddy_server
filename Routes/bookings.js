const express = require("express");
const router = express.Router();
const bookingController = new (require("../Controllers/bookings"))();
const Authentication = new (require("../Middlewares/authentication"))();

router.route("/add").post(Authentication?.adminAuth, bookingController.add);

router
  .route("/update")
  .put(Authentication?.adminAuth, bookingController.update);

router
  .route("/delete/:id")
  .put(Authentication?.adminAuth, bookingController.delete);

router.route("/get/:id").get(Authentication?.adminAuth, bookingController.get);

router.route("/list").post(Authentication?.adminAuth, bookingController.list);

module.exports = router;
