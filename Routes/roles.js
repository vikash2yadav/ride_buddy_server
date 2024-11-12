const express = require("express");
const router = express.Router();
const roleController = new (require("../Controllers/roles.js"))();
const Authentication = new (require("../Middlewares/authentication"))();

router.route("/add").post(Authentication?.adminAuth, roleController.add);

router.route("/update").put(Authentication?.adminAuth, roleController.update);

router
  .route("/delete/:id")
  .put(Authentication?.adminAuth, roleController.delete);

router.route("/get/:id").get(Authentication?.adminAuth, roleController.get);

router.route("/list").post(Authentication?.adminAuth, roleController.list);

module.exports = router;
