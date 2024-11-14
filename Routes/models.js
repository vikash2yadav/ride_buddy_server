const express = require("express");
const router = express.Router();
const modelController = new (require("../Controllers/models"))();
const Authentication = new (require("../Middlewares/authentication"))();

router.route("/add").post(Authentication?.userAuth, modelController.add);

router.route("/update").put(Authentication?.userAuth, modelController.update);

router
  .route("/delete/:id")
  .put(Authentication?.userAuth, modelController.delete);

router.route("/get/:id").get(Authentication?.userAuth, modelController.get);

router.route("/list").post(Authentication?.userAuth, modelController.list);

module.exports = router;
