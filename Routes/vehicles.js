const express = require("express");
const { MODULES, ACCESS_TYPES } = require("../Config/constant");
const router = express.Router();
const vehicleController = new (require("../Controllers/vehicles"))();
const Authentication = new (require("../Middlewares/authentication"))();

router
  .route("/add")
  .post(
    Authentication?.checkAccess(MODULES.VEHICLES, ACCESS_TYPES.CREATE),
    vehicleController.add
  );

router
  .route("/update")
  .put(
    Authentication?.checkAccess(MODULES.VEHICLES, ACCESS_TYPES.UPDATE),
    vehicleController.update
  );

router
  .route("/delete/:id")
  .put(
    Authentication?.checkAccess(MODULES.VEHICLES, ACCESS_TYPES.DELETE),
    vehicleController.delete
  );

router
  .route("/get/:id")
  .get(
    Authentication?.checkAccess(MODULES.VEHICLES, ACCESS_TYPES.READ),
    vehicleController.get
  );

router
  .route("/list")
  .post(
    Authentication?.checkAccess(MODULES.VEHICLES, ACCESS_TYPES.READ),
    vehicleController.list
  );

module.exports = router;
