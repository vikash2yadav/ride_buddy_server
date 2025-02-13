const express = require("express");
const { MODULES, ACCESS_TYPES } = require("../Config/constant");
const router = express.Router();
const stateController = new (require("../Controllers/states"))();
const Authentication = new (require("../Middlewares/authentication"))();

router
  .route("/add")
  .post(
    Authentication?.checkAccess(MODULES.STATE, ACCESS_TYPES.CREATE),
    stateController.add
  );

router
  .route("/update")
  .put(
    Authentication?.checkAccess(MODULES.STATE, ACCESS_TYPES.UPDATE),
    stateController.update
  );

router
  .route("/delete/:id")
  .put(
    Authentication?.checkAccess(MODULES.STATE, ACCESS_TYPES.DELETE),
    stateController.delete
  );

router
  .route("/get/:id")
  .get(
    Authentication?.checkAccess(MODULES.STATE, ACCESS_TYPES.READ),
    stateController.get
  );

router
  .route("/list")
  .post(
    // Authentication?.checkAccess(MODULES.STATE, ACCESS_TYPES.READ),
    stateController.list
  );

module.exports = router;
