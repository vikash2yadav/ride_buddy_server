const express = require("express");
const router = express.Router();
const vehicleController = new (require("../Controllers/vehicles"))();

router.route("/add").post(vehicleController.add);

router.route("/update").put(vehicleController.update);

router
  .route("/delete/:id")
  .put(vehicleController.delete);

router.route("/get/:id").get(vehicleController.get);

router.route("/list").post(vehicleController.list);

module.exports = router;
