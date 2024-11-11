const express = require("express");
const router = express.Router();
const roleController = new (require("../Controllers/roles.js"))();

router.route("/add").post(roleController.add);

router.route("/update").put(roleController.update);

router.route("/delete/:id").put(roleController.delete);

router.route("/get/:id").get(roleController.get);

router.route("/list").post(roleController.list);

module.exports = router;
