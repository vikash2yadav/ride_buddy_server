const express = require("express");
const router = express.Router();
const bookingController = new (require("../Controllers/bookings"))();
const Authentication = new (require("../Middlewares/authentication"))();

router.route("/add").post(Authentication?.userAuth, bookingController.add);

router.route("/update").put(Authentication?.userAuth, bookingController.update);

router
  .route("/delete/:id")
  .put(Authentication?.userAuth, bookingController.delete);

router.route("/get/:id").get(Authentication?.userAuth, bookingController.get);

router.route("/list").post(Authentication?.userAuth, bookingController.list);

module.exports = router;
