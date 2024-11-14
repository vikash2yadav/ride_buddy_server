const express = require("express");
const router = express.Router();
const orderController = new (require("../Controllers/orders"))();
const Authentication = new (require("../Middlewares/authentication"))();

router.route("/add").post(Authentication.userAuth, orderController.add);

router.route("/update").put(Authentication.userAuth, orderController.update);

router
  .route("/delete/:id")
  .put(Authentication.userAuth, orderController.delete);

router.route("/get/:id").get(Authentication.userAuth, orderController.get);

router.route("/list").post(Authentication.userAuth, orderController.list);

module.exports = router;
