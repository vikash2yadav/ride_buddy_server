const express = require("express");
const router = express.Router();
const modelController = new (require("../Controllers/models"))();
const Authentication = new (require("../Middlewares/authentication"))();

router.route("/add").post(Authentication?.adminAuth, modelController.add);

router.route("/update").put(Authentication?.adminAuth, modelController.update);

router
  .route("/delete/:id")
  .put(Authentication?.adminAuth, modelController.delete);

router.route("/get/:id").get(Authentication?.adminAuth, modelController.get);

router.route("/list").post(Authentication?.adminAuth, modelController.list);

module.exports = router;
