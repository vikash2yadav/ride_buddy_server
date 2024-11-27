const express = require("express");
const router = express.Router();
const notificationController = new (require("../Controllers/notifications"))();

router.route("/add").post(notificationController.add);

router.route("/update").put(notificationController.update);

router
  .route("/delete/:id")
  .put(notificationController.delete);

router.route("/get/:id").get(notificationController.get);

router.route("/list").post(notificationController.list);

module.exports = router;
