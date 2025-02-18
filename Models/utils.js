const fs = require("fs");
const FileManager = new (require("../Utils/file_manager"))();
const { unlinkRemoveFile } = require("../Utils/helper");

class utilsModel {
  // Upload multiple image
  async uploadMultipleImage(bodyData, folderName) {
    let result = [];
    bodyData?.map((element) => {
      let imagePath = FileManager.createLiveImageURL(element, folderName);
      let obj = {
        url: imagePath,
        name: element?.filename,
      };
      result?.push(obj);
    });

    return result;
  }

  // Upload single image
  async uploadSingleImage(bodyData, files) {
    console.log(bodyData);
    let imageCount = "single";
    let imagePath = FileManager.createLiveImageURL(
      files,
      bodyData?.folderName,
      imageCount
    );

    if (Boolean(bodyData?.oldImage)) {
      let utilPath = __dirname.split("\\");
      utilPath.pop(utilPath?.length - 1);
      let oldImage =
        utilPath.join("/") +
        "/Assets/images" +
        bodyData?.folderName +
        "/" +
        bodyData?.oldImage;
      if (fs.existsSync(oldImage)) {
        fs.unlinkSync(oldImage);
      }
    }

    return {
      url: imagePath,
      name: files?.filename,
    };
  }

  // Remove image
  async removeImage(bodyData) {
    return await unlinkRemoveFile(bodyData?.folderName, bodyData?.url);
  }
}

module.exports = utilsModel;
