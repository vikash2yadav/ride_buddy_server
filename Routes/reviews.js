const express = require("express");
const router = express.Router();
const reviewController = new (require("../Controllers/reviews"))();

router.route("/add").post(reviewController.add);

router.route("/update").put(reviewController.update);

router
  .route("/delete/:id")
  .put(reviewController.delete);

router.route("/get/:id").get(reviewController.get);

router.route("/list").post(reviewController.list);

module.exports = router;
