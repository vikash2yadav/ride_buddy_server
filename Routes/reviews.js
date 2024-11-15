const express = require("express");
const { MODULES, ACCESS_TYPES } = require("../Config/constant");
const router = express.Router();
const reviewController = new (require("../Controllers/reviews"))();
const Authentication = new (require("../Middlewares/authentication"))();

router
  .route("/add")
  .post(
    Authentication?.checkAccess(MODULES.REVIEWS, ACCESS_TYPES.CREATE),
    reviewController.add
  );

router
  .route("/update")
  .put(
    Authentication?.checkAccess(MODULES.REVIEWS, ACCESS_TYPES.UPDATE),
    reviewController.update
  );

router
  .route("/delete/:id")
  .put(
    Authentication?.checkAccess(MODULES.REVIEWS, ACCESS_TYPES.DELETE),
    reviewController.delete
  );

router
  .route("/get/:id")
  .get(
    Authentication?.checkAccess(MODULES.REVIEWS, ACCESS_TYPES.READ),
    reviewController.get
  );

router
  .route("/list")
  .post(
    Authentication?.checkAccess(MODULES.REVIEWS, ACCESS_TYPES.READ),
    reviewController.list
  );

module.exports = router;
