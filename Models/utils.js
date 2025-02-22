const fs = require("fs");
const FileManager = new (require("../Utils/file_manager"))();
const { unlinkRemoveFile } = require("../Utils/helper");
const { STATUS, IMAGE_PATHS } = require("../Config/constant");
const {
  vehicles: vehiclesSchema,
  vehicle_images: vehiclesImagesSchema,
  modells: modelSchema,
  categories: categorySchema,
  brands: brandSchema
} = require("../Database/Schema");
const { Op, fn, col } = require("sequelize");
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
        "/Assets/" +
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

  // Global Search
  async globalSearch(bodyData) {
    const currentPage = bodyData?.currentPage || 1;
    const itemsPerPage = bodyData?.itemsPerPage || 5;

    const offset = (currentPage - 1) * itemsPerPage;

    var filters = bodyData.search;
    let vehicleFilterQuery = {};

    if (filters) {
      const searchValue = `%${filters.trim()}%`;
      vehicleFilterQuery = {
        [Op.or]: [
          { vehicle_type: { [Op.like]: searchValue } },
          { fuel_type: { [Op.like]: searchValue } },
          { year: { [Op.like]: searchValue } },
          { registration_number: { [Op.like]: searchValue } },
          { vin_number: { [Op.like]: searchValue } },
          { color: { [Op.like]: searchValue } },
          { engine_capacity: { [Op.like]: searchValue } },
          { price_per_hour: { [Op.like]: searchValue } },
          { price_per_day: { [Op.like]: searchValue } },
          { insurance_type: { [Op.like]: searchValue } },
          { deposit_amount: { [Op.like]: searchValue } },
          { mileage: { [Op.like]: searchValue } },
          { damage_report: { [Op.like]: searchValue } },
          { condition_status: { [Op.like]: searchValue } },
          { seats: { [Op.like]: searchValue } },
          { km_driven: { [Op.like]: searchValue } },
          { rto: { [Op.like]: searchValue } },
          { ownership: { [Op.like]: searchValue } },
          { location: { [Op.like]: searchValue } },
        ],
        is_delete: STATUS.NOTDELETED,
        status: STATUS.ACTIVE,
      };
    }

    if (bodyData?.vehicles) {
      let vehiclesResult = await vehiclesSchema.findAndCountAll({
        where: vehicleFilterQuery,
        limit: 10,
        order: [["year", "DESC"]],
        include: [
          {
            required: false,
            model: vehiclesImagesSchema,
            attributes: [
              "image_url",
              [
                fn("concat", `${IMAGE_PATHS.VEHICLE}`, col("image_url")),
                "image_url",
              ],
            ],
          },
          {
            model: modelSchema,
            attributes: ["name"],
          },
          {
            model: categorySchema,
            attributes: ["name"],
          },
          {
            model: brandSchema,
            attributes: ["name"],
          },
        ],
      });

      return vehiclesResult;
    }
  }
}

module.exports = utilsModel;
