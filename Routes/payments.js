const express = require("express");
const { MODULES, ACCESS_TYPES } = require("../Config/constant");
const Authentication = new (require("../Middlewares/authentication"))();
const router = express.Router();
const paymentController = new (require("../Controllers/payments"))();

router
  .route("/add")
  .post(
    Authentication?.checkAccess(MODULES.PAYMENTS, ACCESS_TYPES.CREATE),
    paymentController.add
  );

router
  .route("/update")
  .put(
    Authentication?.checkAccess(MODULES.PAYMENTS, ACCESS_TYPES.UPDATE),
    paymentController.update
  );

router
  .route("/delete/:id")
  .put(
    Authentication?.checkAccess(MODULES.PAYMENTS, ACCESS_TYPES.DELETE),
    paymentController.delete
  );

router
  .route("/get/:id")
  .get(
    Authentication?.checkAccess(MODULES.PAYMENTS, ACCESS_TYPES.READ),
    paymentController.get
  );

router
  .route("/list")
  .post(
    Authentication?.checkAccess(MODULES.PAYMENTS, ACCESS_TYPES.READ),
    paymentController.list
  );

module.exports = router;
