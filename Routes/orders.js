const express = require("express");
const router = express.Router();
const orderController = new (require("../Controllers/orders"))();

router.route("/add").post(orderController.add);

router.route("/update").put(orderController.update);

router
  .route("/delete/:id")
  .put(orderController.delete);

router.route("/get/:id").get(orderController.get);

router.route("/list").post(orderController.list);

module.exports = router;
