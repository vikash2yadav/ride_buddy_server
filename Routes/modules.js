const express = require("express");
const { MODULES, ACCESS_TYPES } = require("../Config/constant");
const router = express.Router();
const moduleController = new (require("../Controllers/modules"))();
const Authentication = new (require("../Middlewares/authentication"))();

router
  .route("/add")
  .post(
    Authentication?.checkAccess(MODULES.MODULES, ACCESS_TYPES.CREATE),
    moduleController.add
  );

router
  .route("/update")
  .put(
    Authentication?.checkAccess(MODULES.MODULES, ACCESS_TYPES.UPDATE),
    moduleController.update
  );

router
  .route("/delete/:id")
  .put(
    Authentication?.checkAccess(MODULES.MODULES, ACCESS_TYPES.DELETE),
    moduleController.delete
  );

router
  .route("/get/:id")
  .get(
    Authentication?.checkAccess(MODULES.MODULES, ACCESS_TYPES.READ),
    moduleController.get
  );

router
  .route("/list")
  .post(
    Authentication?.checkAccess(MODULES.MODULES, ACCESS_TYPES.READ),
    moduleController.list
  );

module.exports = router;
