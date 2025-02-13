const express = require("express");
const { MODULES, ACCESS_TYPES } = require("../Config/constant");
const router = express.Router();
const cityController = new (require("../Controllers/cities"))();
const Authentication = new (require("../Middlewares/authentication"))();

router
  .route("/add")
  .post(
    Authentication?.checkAccess(MODULES.CITY, ACCESS_TYPES.CREATE),
    cityController.add
  );

router
  .route("/update")
  .put(
    Authentication?.checkAccess(MODULES.CITY, ACCESS_TYPES.UPDATE),
    cityController.update
  );

router
  .route("/delete/:id")
  .put(
    Authentication?.checkAccess(MODULES.CITY, ACCESS_TYPES.DELETE),
    cityController.delete
  );

router
  .route("/get/:id")
  .get(
    Authentication?.checkAccess(MODULES.CITY, ACCESS_TYPES.READ),
    cityController.get
  );

router
  .route("/list")
  .post(
    // Authentication?.checkAccess(MODULES.CITY, ACCESS_TYPES.READ),
    cityController.list
  );

router
  .route("/imp/list")
  .get(
    // Authentication?.checkAccess(MODULES.CITY, ACCESS_TYPES.READ),
    cityController.impList
  );

module.exports = router;
