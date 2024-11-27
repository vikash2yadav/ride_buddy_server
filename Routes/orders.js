const express = require("express");
const { MODULES, ACCESS_TYPES } = require("../Config/constant");
const router = express.Router();
const orderController = new (require("../Controllers/orders"))();
const Authentication = new (require("../Middlewares/authentication"))();

router
  .route("/add")
  .post(
    Authentication?.checkAccess(MODULES.ORDERS, ACCESS_TYPES.CREATE),
    orderController.add
  );

router
  .route("/update")
  .put(
    Authentication?.checkAccess(MODULES.ORDERS, ACCESS_TYPES.UPDATE),
    orderController.update
  );

router
  .route("/delete/:id")
  .put(
    Authentication?.checkAccess(MODULES.ORDERS, ACCESS_TYPES.DELETE),
    orderController.delete
  );

router
  .route("/get/:id")
  .get(
    Authentication?.checkAccess(MODULES.ORDERS, ACCESS_TYPES.READ),
    orderController.get
  );

router
  .route("/list")
  .post(
    Authentication?.checkAccess(MODULES.ORDERS, ACCESS_TYPES.READ),
    orderController.list
  );

module.exports = router;
