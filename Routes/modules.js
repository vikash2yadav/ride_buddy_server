const express = require("express");
const router = express.Router();
const moduleController = new (require("../Controllers/modules"))();
const Authentication = new (require("../Middlewares/authentication"))();

router.route("/add").post(Authentication?.userAuth, moduleController.add);

router.route("/update").put(Authentication?.userAuth, moduleController.update);

router
  .route("/delete/:id")
  .put(Authentication?.userAuth, moduleController.delete);

router.route("/get/:id").get(Authentication?.userAuth, moduleController.get);

router.route("/list").post(Authentication?.userAuth, moduleController.list);

module.exports = router;
