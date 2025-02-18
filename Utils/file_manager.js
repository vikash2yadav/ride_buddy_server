const multer = require("multer");
const path = require("path");
const jimp = require("jimp");
const sharp = require("sharp");
const fs = require("fs");
const { PATHS } = require("../Config/constant");

class FileManager {
  getFileName(file) {
    let now = new Date();
    return (
      Date.now() +
      "_" +
      now.getHours() +
      "_" +
      now.getMinutes() +
      "_" +
      now.getSeconds() +
      "_" +
      Math.floor(Math.random() * 999) +
      99 +
      path.extname(file.originalname)
    );
  }

  resolvePath(filepath) {
    const utilPath = path.dirname(__filename); // Get the current directory of the script
    const basePath = path.resolve(utilPath, ".."); // Navigate to the parent directory

    // Remove leading '/' if it exists in the filepath to treat it as a relative path
    if (filepath.startsWith("/")) {
      filepath = filepath.substring(1);
    }

    const finalPath = path.join(basePath, "Assets", filepath); // Combine the base path with 'Assets/images' and the adjusted filepath

    if (!fs.existsSync(finalPath)) {
      fs.mkdirSync(finalPath, { recursive: true }); // Create the directory path recursively if it doesn't exist
    }

    return finalPath;
  }
  
  userUploadImage(folderName) {
    var storage = multer.diskStorage({
      destination: function (req, file, callBack) {
        if (folderName) {
          callBack(null, this.resolvePath(folderName));
        } else {
          console.log(req?.body?.folderName);
          callBack(null, this.resolvePath("users"));
        }
      }.bind(this),
      filename: function (req, file, callBack) {
        let fileName = this.getFileName(file);
        if (!req.body[file.fieldname]) {
          req.body[file.fieldname] = [];
          req.body[file.fieldname].push(fileName);
        } else req.body[file.fieldname].push(fileName);
        callBack(null, fileName);
      }.bind(this),
    });

    return multer({ storage });
  }

  productUploadImage() {
    var storage = multer.diskStorage({
      destination: function (req, file, callBack) {
        callBack(null, this.resolvePath(PATHS.IMAGES.PRODUCTS));
      }.bind(this),
      filename: function (req, file, callBack) {
        let fileName = this.getFileName(file);
        console.log("before file name", fileName);
        if (!req.body[file.fieldname]) {
          req.body[file.fieldname] = [];
          req.body[file.fieldname].push(fileName);
        } else req.body[file.fieldname].push(fileName);
        console.log("fileName", req.body.file);
        callBack(null, fileName);
      }.bind(this),
    });

    return multer({ storage });
  }

  // Create Live Image URL
  createLiveImageURL(filedata, folderName, imageCount) {
    if (imageCount == "single") {
      return process.env.FRONTEND_IMAGE_PATH + folderName + "/" + filedata[0];
    } else {
      return (
        process.env.FRONTEND_IMAGE_PATH + folderName + "/" + filedata?.filename
      );
    }
  }

  // Get image meta data
  async getMetaData(file) {
    try {
      let {
        bitmap: { width, height },
        _originalMime: mimeType,
      } = await jimp.read(file);
      return { width, height, mimeType };
    } catch (error) {
      return {};
    }
  }

  async getImageMetaData(files, filePath) {
    filePath = this.resolvePath(filePath);
    // console.log("files=>",files);
    let promises = [],
      extensions = [];
    if (files && files != undefined && files.length > 0) {
      files.forEach(async (file) => {
        promises.push(getMetaData(filePath + file));
        extensions.push(getExtension(file));
      });

      let fileMetaData = await Promise.all(promises);
      return fileMetaData.map((meta, index) => {
        return { ...meta, extension: extensions[index] };
      });

      async function getMetaData(file) {
        try {
          const { width, height, format } = await sharp(file).metadata();
          return { width, height, mimeType: format };
        } catch (error) {
          return {};
        }
      }

      function getExtension(file) {
        return path.extname(file);
      }
    } else {
      return [];
    }
  }
}
module.exports = FileManager;
