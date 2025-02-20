const { STATUS_MESSAGES } = require("../Config/constant");
const FileManager = new (require("../Utils/file_manager"))();
const utilsModel = new (require("../Models/utils"))();

class utilsController {
  // Upload multiple image
  async uploadMultipleImage(req, res) {
    try {
      let imageMeta = await FileManager.getImageMetaData(
        req?.body?.file,
        req?.body?.folderName
      );

      let urlData = await utilsModel.uploadMultipleImage(
        req?.files,
        req?.body?.folderName
      );

      let data = imageMeta.map((meta, index) => {
        return { ...urlData[index], ...meta };
      });

      res.handler.success(data);
    } catch (error) {
      res.handler.serverError(error);
    }
  }

  // Upload single image
  async uploadSingleImage(req, res) {
    
    try {
      let imageMeta = await FileManager.getImageMetaData(
        req?.body?.file,
        req?.body?.folderName
      );
      
      let urlData = await utilsModel.uploadSingleImage(req?.body, req?.file);
      
      let data = { ...urlData, ...imageMeta };

      res.handler.success(data);
    } catch (error) {
      res.handler.serverError(error);
    }
  }

  // Remove image
  async removeImage(req, res) {
    try {
      let data = await utilsModel.removeImage(req?.body);

      res.handler.success(data, STATUS_MESSAGES.IMAGE_REMOVED);
    } catch (error) {
      res.handler.serverError(error);
    }
  }
}

module.exports = utilsController;
