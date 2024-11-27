const express = require("express");
const { MODULES, ACCESS_TYPES } = require("../Config/constant");
const router = express.Router();
const bookingController = new (require("../Controllers/bookings"))();
const Authentication = new (require("../Middlewares/authentication"))();

router
  .route("/add")
  .post(
    Authentication?.checkAccess(MODULES.BOOKINGS, ACCESS_TYPES.CREATE),
    bookingController.add
  );

router
  .route("/update")
  .put(
    Authentication?.checkAccess(MODULES.BOOKINGS, ACCESS_TYPES.UPDATE),
    bookingController.update
  );

router
  .route("/delete/:id")
  .put(
    Authentication?.checkAccess(MODULES.BOOKINGS, ACCESS_TYPES.DELETE),
    bookingController.delete
  );

router
  .route("/get/:id")
  .get(
    Authentication?.checkAccess(MODULES.BOOKINGS, ACCESS_TYPES.READ),
    bookingController.get
  );

router
  .route("/list")
  .post(
    Authentication?.checkAccess(MODULES.BOOKINGS, ACCESS_TYPES.READ),
    bookingController.list
  );

module.exports = router;
