const express = require("express");
const FileManager = new(require("../Utils/file_manager"));
const router = express.Router();
const utilsController = new (require("../Controllers/utils"))();

// Upload multiple image
router
  .route("/upload/multiple")
  .post(
    FileManager.userUploadImage().array("file"),
    utilsController.uploadMultipleImage
  );

// Upload single image
router
  .route("/upload/single")
  .post(
    FileManager.userUploadImage().single("file"),
    utilsController.uploadSingleImage
  );

// Remove image
router.route("/remove/image").post(utilsController.removeImage);

// Global Search
router.route('/global_search').post(utilsController.globalSearch);

module.exports = router;
