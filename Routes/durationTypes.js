const express = require("express");
const { MODULES, ACCESS_TYPES } = require("../Config/constant");
const router = express.Router();
const durationTypeController = new (require("../Controllers/durationTypes"))();
const Authentication = new (require("../Middlewares/authentication"))();

router
  .route("/add")
  .post(
    Authentication?.checkAccess(MODULES.DURATION_TYPE, ACCESS_TYPES.CREATE),
    durationTypeController.add
  );

router
  .route("/update")
  .put(
    Authentication?.checkAccess(MODULES.DURATION_TYPE, ACCESS_TYPES.UPDATE),
    durationTypeController.update
  );

router
  .route("/delete/:id")
  .put(
    Authentication?.checkAccess(MODULES.DURATION_TYPE, ACCESS_TYPES.DELETE),
    durationTypeController.delete
  );

router
  .route("/get/:id")
  .get(
    Authentication?.checkAccess(MODULES.DURATION_TYPE, ACCESS_TYPES.READ),
    durationTypeController.get
  );

router
  .route("/list")
  .post(
    Authentication?.checkAccess(MODULES.DURATION_TYPE, ACCESS_TYPES.READ),
    durationTypeController.list
  );

module.exports = router;
