const express = require("express");
const userRoutes = require("./users");
const roleRoutes = require("./roles");

const router = express.Router();

router.use("/user", userRoutes);
router.use("/role", roleRoutes);

module.exports = router;
