const express = require("express");
const { MODULES, ACCESS_TYPES } = require("../Config/constant");
const router = express.Router();
const modelController = new (require("../Controllers/models"))();
const Authentication = new (require("../Middlewares/authentication"))();

router
  .route("/add")
  .post(
    Authentication?.checkAccess(MODULES.MODELS, ACCESS_TYPES.CREATE),
    modelController.add
  );

router
  .route("/update")
  .put(
    Authentication?.checkAccess(MODULES.MODELS, ACCESS_TYPES.UPDATE),
    modelController.update
  );

router
  .route("/delete/:id")
  .put(
    Authentication?.checkAccess(MODULES.MODELS, ACCESS_TYPES.DELETE),
    modelController.delete
  );

router
  .route("/get/:id")
  .get(
    Authentication?.checkAccess(MODULES.MODELS, ACCESS_TYPES.READ),
    modelController.get
  );

router
  .route("/list")
  .post(
    Authentication?.checkAccess(MODULES.MODELS, ACCESS_TYPES.READ),
    modelController.list
  );

module.exports = router;
