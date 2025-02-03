const express = require("express");
const { MODULES, ACCESS_TYPES } = require("../Config/constant");
const router = express.Router();
const brandController = new (require("../Controllers/brands"))();
const Authentication = new (require("../Middlewares/authentication"))();

router
  .route("/add")
  .post(
    Authentication?.checkAccess(MODULES.BRANDS, ACCESS_TYPES.CREATE),
    brandController.add
  );

router
  .route("/update")
  .put(
    Authentication?.checkAccess(MODULES.BRANDS, ACCESS_TYPES.UPDATE),
    brandController.update
  );

router
  .route("/delete/:id")
  .put(
    Authentication?.checkAccess(MODULES.BRANDS, ACCESS_TYPES.DELETE),
    brandController.delete
  );

router
  .route("/get/:id")
  .get(
    Authentication?.checkAccess(MODULES.BRANDS, ACCESS_TYPES.READ),
    brandController.get
  );

router
  .route("/list")
  .post(
    // Authentication?.checkAccess(MODULES.BRANDS, ACCESS_TYPES.READ),
    brandController.list
  );

module.exports = router;
