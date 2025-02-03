const express = require("express");
const { MODULES, ACCESS_TYPES } = require("../Config/constant");
const router = express.Router();
const partnerRequestController =
  new (require("../Controllers/partner_requests"))();
const Authentication = new (require("../Middlewares/authentication"))();

router
  .route("/add")
  .post(
    partnerRequestController.add
  );

router
  .route("/update")
  .put(
    Authentication?.checkAccess(MODULES.PARTNER_REQUEST, ACCESS_TYPES.UPDATE),
    partnerRequestController.update
  );

router
  .route("/delete/:id")
  .put(
    Authentication?.checkAccess(MODULES.PARTNER_REQUEST, ACCESS_TYPES.DELETE),
    partnerRequestController.delete
  );

router
  .route("/get/:id")
  .get(
    Authentication?.checkAccess(MODULES.PARTNER_REQUEST, ACCESS_TYPES.READ),
    partnerRequestController.get
  );

router
  .route("/list")
  .post(
    Authentication?.checkAccess(MODULES.PARTNER_REQUEST, ACCESS_TYPES.READ),
    partnerRequestController.list
  );

module.exports = router;
