const express = require("express");
const router = express.Router();
const reviewController = new (require("../Controllers/reviews"))();
const Authentication = new (require("../Middlewares/authentication"))();

router.route("/add").post(Authentication.userAuth, reviewController.add);

router.route("/update").put(Authentication.userAuth, reviewController.update);

router
  .route("/delete/:id")
  .put(Authentication.userAuth, reviewController.delete);

router.route("/get/:id").get(Authentication.userAuth, reviewController.get);

router.route("/list").post(Authentication.userAuth, reviewController.list);

module.exports = router;
