const { Op, fn, col } = require("sequelize");
const { STATUS_CODES, STATUS, IMAGE_PATHS } = require("../Config/constant");
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
  categories: categorySchema,
  vehicle_durations: vehicleDurationSchema,
  duration_types: durationTypeSchema,
  duration_values: durationValueSchema
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
        id,
        is_delete: false,
      },
      include: [
        {
          model: categorySchema,
        },
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
          attributes: ['image_type', [fn('concat', `${IMAGE_PATHS.VEHICLE}`, col('image_url')), "image_url"]],
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
        {
          model: vehicleDurationSchema,
          attributes: ["vehicle_id", "date", "status"],
          include: [
            {
              model: durationTypeSchema,
              attributes: ["name", "status", "id"],
            },
            {
              model: durationValueSchema,
              attributes: ["name", "status", "id"],
            }
          ]
        },
      ],
    });

    if (!data) {
      return {
        status: STATUS_CODES.NOT_FOUND,
      };
    }

    console.log(data);
    
    return data;
  }

  // list
  async list(bodyData) {
    const {filters} = bodyData;

    let filterQuery = {};
    if (filters) {
      Object.entries(filters).map(([key, value]) => {
          if (key != "" && value != "") {
              if (typeof (value) === 'string') {
                  filterQuery[key] = {
                      [Op.like]: `%${value.trim()}%`,
                  };
              }
              else {
                  filterQuery[key] = {
                      [Op.eq]: `${value}`
                  };
              }
          }
      });
  }

    return await vehicleSchema.findAll({
      where: {
        is_delete: false,
        ...filterQuery
      },
      include: [
        {
          model: categorySchema,
        },
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
