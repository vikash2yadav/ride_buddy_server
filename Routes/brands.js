const express = require("express");
const router = express.Router();
const brandController = new (require("../Controllers/brands"))();
const Authentication = new (require("../Middlewares/authentication"))();

router.route("/add").post(Authentication?.userAuth, brandController.add);

router.route("/update").put(Authentication?.userAuth, brandController.update);

router
  .route("/delete/:id")
  .put(Authentication?.userAuth, brandController.delete);

router.route("/get/:id").get(Authentication?.userAuth, brandController.get);

router.route("/list").post(Authentication?.userAuth, brandController.list);

module.exports = router;
