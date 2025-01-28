const express = require("express");
const { MODULES, ACCESS_TYPES } = require("../Config/constant");
const router = express.Router();
const citiesController = new (require("../Controllers/cities"))();
const Authentication = new (require("../Middlewares/authentication"))();

router
  .route("/add")
  .post(
    Authentication?.checkAccess(MODULES.CITY, ACCESS_TYPES.CREATE),
    citiesController.add
  );

router
  .route("/update")
  .put(
    Authentication?.checkAccess(MODULES.CITY, ACCESS_TYPES.UPDATE),
    citiesController.update
  );

router
  .route("/delete/:id")
  .put(
    Authentication?.checkAccess(MODULES.CITY, ACCESS_TYPES.DELETE),
    citiesController.delete
  );

router
  .route("/get/:id")
  .get(
    Authentication?.checkAccess(MODULES.CITY, ACCESS_TYPES.READ),
    citiesController.get
  );

router
  .route("/list")
  .post(
    citiesController.list
  );

module.exports = router;
