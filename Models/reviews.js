const { Op } = require("sequelize");
const { STATUS_CODES, STATUS, STATUS_MESSAGES } = require("../Config/constant");
const {
  reviews: reviewSchema,
  users: userSchema,
  vehicles: vehicleSchema,
} = require("../Database/Schema");

class reviewModel {
  // add
  async add(bodyData) {
    let data = await reviewSchema.findOne({
      where: {
        user_id: bodyData?.user_id,
        vehicle_id: bodyData?.vehicle_id,
      },
    });

    if (data) {
      return {
        status: STATUS_CODES.ALREADY_REPORTED,
      };
    }

    return await reviewSchema.create(bodyData);
  }

  // update
  async update(bodyData) {
    let data = await reviewSchema.findOne({
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

    return await reviewSchema.update(bodyData, {
      where: {
        id: bodyData?.id,
      },
    });
  }

  // delete
  async delete(params) {
    const { id } = params;

    let data = await reviewSchema.findOne({
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

    return await reviewSchema.update(
      { is_delete: STATUS.DELETED },
      {
        where: { id: id },
      }
    );
  }

  // get
  async get(params) {
    const { id } = params;

    let data = await reviewSchema.findOne({
      where: {
        id: id,
        is_delete: false,
      },
      include: [
        {
          model: userSchema,
        },
        {
          model: vehicleSchema,
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
    return await reviewSchema.findAll({
      where: {
        is_delete: false,
      },
      include: [
        {
          model: userSchema,
        },
        {
          model: vehicleSchema,
        },
      ],
    });
  }
}

module.exports = reviewModel;
