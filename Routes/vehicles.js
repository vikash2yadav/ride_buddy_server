const express = require("express");
const router = express.Router();
const vehicleController = new (require("../Controllers/vehicles"))();
const Authentication = new (require("../Middlewares/authentication"))();

router.route("/add").post(Authentication.userAuth, vehicleController.add);

router.route("/update").put(Authentication.userAuth, vehicleController.update);

router
  .route("/delete/:id")
  .put(Authentication.userAuth, vehicleController.delete);

router.route("/get/:id").get(Authentication.userAuth, vehicleController.get);

router.route("/list").post(Authentication.userAuth, vehicleController.list);

module.exports = router;
