const express = require("express");
const { MODULES, ACCESS_TYPES } = require("../Config/constant");
const router = express.Router();
const promoCodeController = new (require("../Controllers/promo_codes"))();
const Authentication = new (require("../Middlewares/authentication"))();

router
  .route("/add")
  .post(
    Authentication?.checkAccess(MODULES.PROMO_CODE, ACCESS_TYPES.CREATE),
    promoCodeController.add
  );

router
  .route("/update")
  .put(
    Authentication?.checkAccess(MODULES.PROMO_CODE, ACCESS_TYPES.UPDATE),
    promoCodeController.update
  );

router
  .route("/delete/:id")
  .put(
    Authentication?.checkAccess(MODULES.PROMO_CODE, ACCESS_TYPES.DELETE),
    promoCodeController.delete
  );

router
  .route("/get/:id")
  .get(
    Authentication?.checkAccess(MODULES.PROMO_CODE, ACCESS_TYPES.READ),
    promoCodeController.get
  );

router
  .route("/list")
  .post(
    Authentication?.checkAccess(MODULES.PROMO_CODE, ACCESS_TYPES.READ),
    promoCodeController.list
  );

module.exports = router;
