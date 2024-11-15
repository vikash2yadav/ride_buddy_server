const express = require("express");
const { MODULES, ACCESS_TYPES } = require("../Config/constant");
const router = express.Router();
const favouriteController = new (require("../Controllers/favourites"))();
const Authentication = new (require("../Middlewares/authentication"))();

router
  .route("/add")
  .post(
    Authentication?.checkAccess(MODULES.FAVOURITES, ACCESS_TYPES.CREATE),
    favouriteController.add
  );

router
  .route("/update")
  .put(
    Authentication?.checkAccess(MODULES.FAVOURITES, ACCESS_TYPES.UPDATE),
    favouriteController.update
  );

router
  .route("/delete/:id")
  .put(
    Authentication?.checkAccess(MODULES.FAVOURITES, ACCESS_TYPES.DELETE),
    favouriteController.delete
  );

router
  .route("/get/:id")
  .get(
    Authentication?.checkAccess(MODULES.FAVOURITES, ACCESS_TYPES.READ),
    favouriteController.get
  );

router
  .route("/list")
  .post(
    Authentication?.checkAccess(MODULES.FAVOURITES, ACCESS_TYPES.READ),
    favouriteController.list
  );

module.exports = router;
