const express = require("express");
const router = express.Router();
const promoCodeController = new (require("../Controllers/promo_codes"))();
const Authentication = new (require("../Middlewares/authentication"))();

router.route("/add").post(Authentication?.userAuth, promoCodeController.add);

router
  .route("/update")
  .put(Authentication?.userAuth, promoCodeController.update);

router
  .route("/delete/:id")
  .put(Authentication?.userAuth, promoCodeController.delete);

router.route("/get/:id").get(Authentication?.userAuth, promoCodeController.get);

router.route("/list").post(Authentication?.userAuth, promoCodeController.list);

module.exports = router;
