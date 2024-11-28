const { Op } = require("sequelize");
const { STATUS_CODES, STATUS } = require("../Config/constant");
const {
  vehicles: vehicleSchema,
  brands: brandSchema,
  modells: modelSchema,
  users: userSchema,
  vehicle_images: vehicleImagesSchema,
  specifications: specificationsSchema,
  specification_types: specificationTypeSchema,
  feature_types: featureTypeSchema,
  features: featuresSchema,
  reviews: reviewsSchema,
} = require("../Database/Schema");

class vehicleModel {
  // add
  async add(bodyData) {
    let data = await vehicleSchema.findOne({
      where: {
        registration_number: bodyData?.registration_number,
      },
    });

    if (data) {
      return {
        status: STATUS_CODES.ALREADY_REPORTED,
      };
    }

    return await vehicleSchema.create(bodyData);
  }

  // update
  async update(bodyData) {
    let data = await vehicleSchema.findOne({
      where: {
        id: bodyData?.id,
        is_delete: false,
      },
    });

    if (!data) {
      return {
        status: STATUS_CODES.NOT_FOUND,
      };
    }

    let existVehicle = await vehicleSchema.findOne({
      where: {
        registration_number: bodyData?.registration_number,
        id: { [Op.ne]: bodyData?.id },
      },
    });

    if (existVehicle) {
      return {
        status: STATUS_CODES.ALREADY_REPORTED,
      };
    }

    return await vehicleSchema.update(bodyData, {
      where: {
        id: bodyData?.id,
      },
    });
  }

  // delete
  async delete(params) {
    const { id } = params;

    let data = await vehicleSchema.findOne({
      where: {
        id: id,
        is_delete: false,
      },
    });

    if (!data) {
      return {
        status: STATUS_CODES.NOT_FOUND,
      };
    }

    return await vehicleSchema.update(
      { is_delete: STATUS.DELETED },
      {
        where: { id: id },
      }
    );
  }

  // get
  async get(params) {
    const { id } = params;

    let data = await vehicleSchema.findOne({
      where: {
        id: id,
        is_delete: false,
      },
      include: [
        {
          model: brandSchema,
        },
        {
          model: modelSchema,
        },
        {
          model: userSchema,
        },
        {
          model: userSchema,
          as: "addedBy",
        },
        {
          model: vehicleImagesSchema,
        },
        {
          model: specificationsSchema,
          include: {
            model: specificationTypeSchema,
          },
        },
        {
          model: featuresSchema,
          include: {
            model: featureTypeSchema,
          },
        },
        {
          model: reviewsSchema,
          include: {
            model: userSchema,
            attributes: ["fullName"],
          },
        },
      ],
    });

    if (!data) {
      return {
        status: STATUS_CODES.NOT_FOUND,
      };
    }

    return data;
  }

  // list
  async list(bodyData) {
    return await vehicleSchema.findAll({
      where: {
        is_delete: false,
      },
      include: [
        {
          model: brandSchema,
        },
        {
          model: modelSchema,
        },
        {
          model: userSchema,
        },
        {
          model: userSchema,
          as: "addedBy",
        },
        {
          model: vehicleImagesSchema,
        },
        {
          model: specificationsSchema,
        },
        {
          model: featuresSchema,
          include: {
            model: featureTypeSchema,
          },
        },
      ],
    });
  }
}

module.exports = vehicleModel;
