const express = require("express");
const router = express.Router();
const paymentController = new (require("../Controllers/payments"))();

router.route("/add").post(paymentController.add);

router.route("/update").put(paymentController.update);

router
  .route("/delete/:id")
  .put(paymentController.delete);

router.route("/get/:id").get(paymentController.get);

router.route("/list").post(paymentController.list);

module.exports = router;
