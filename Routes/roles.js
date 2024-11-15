const express = require("express");
const { MODULES, ACCESS_TYPES } = require("../Config/constant.js");
const router = express.Router();
const roleController = new (require("../Controllers/roles.js"))();
const Authentication = new (require("../Middlewares/authentication"))();

router
  .route("/add")
  .post(
    Authentication?.checkAccess(MODULES.ROLES, ACCESS_TYPES.CREATE),
    roleController.add
  );

router
  .route("/update")
  .put(
    Authentication?.checkAccess(MODULES.ROLES, ACCESS_TYPES.UPDATE),
    roleController.update
  );

router
  .route("/delete/:id")
  .put(
    Authentication?.checkAccess(MODULES.ROLES, ACCESS_TYPES.DELETE),
    roleController.delete
  );

router
  .route("/get/:id")
  .get(
    Authentication?.checkAccess(MODULES.ROLES, ACCESS_TYPES.READ),
    roleController.get
  );

router
  .route("/list")
  .post(
    Authentication?.checkAccess(MODULES.ROLES, ACCESS_TYPES.READ),
    roleController.list
  );

module.exports = router;
