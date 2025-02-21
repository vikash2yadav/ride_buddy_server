const express = require("express");
const { MODULES, ACCESS_TYPES } = require("../Config/constant");
const router = express.Router();
const durationValueController = new (require("../Controllers/durationValues"))();
const Authentication = new (require("../Middlewares/authentication"))();

router
  .route("/add")
  .post(
    Authentication?.checkAccess(MODULES.DURATION_VALUE, ACCESS_TYPES.CREATE),
    durationValueController.add
  );

router
  .route("/update")
  .put(
    Authentication?.checkAccess(MODULES.DURATION_VALUE, ACCESS_TYPES.UPDATE),
    durationValueController.update
  );

router
  .route("/delete/:id")
  .put(
    Authentication?.checkAccess(MODULES.DURATION_VALUE, ACCESS_TYPES.DELETE),
    durationValueController.delete
  );

router
  .route("/get/:id")
  .get(
    Authentication?.checkAccess(MODULES.DURATION_VALUE, ACCESS_TYPES.READ),
    durationValueController.get
  );

router
  .route("/list")
  .post(
    Authentication?.checkAccess(MODULES.DURATION_VALUE, ACCESS_TYPES.READ),
    durationValueController.list
  );

module.exports = router;
