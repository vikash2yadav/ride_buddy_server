const express = require("express");
const router = express.Router();
const brandController = new (require("../Controllers/brands"))();
const Authentication = new (require("../Middlewares/authentication"))();

router.route("/add").post(Authentication?.adminAuth, brandController.add);

router.route("/update").put(Authentication?.adminAuth, brandController.update);

router
  .route("/delete/:id")
  .put(Authentication?.adminAuth, brandController.delete);

router.route("/get/:id").get(Authentication?.adminAuth, brandController.get);

router.route("/list").post(Authentication?.adminAuth, brandController.list);

module.exports = router;
