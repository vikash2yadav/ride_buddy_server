const { Op } = require("sequelize");
const { STATUS_CODES, STATUS, STATUS_MESSAGES, ROLES } = require("../Config/constant");
const {
  reviews: reviewSchema,
  users: userSchema,
  vehicles: vehicleSchema,
} = require("../Database/Schema");

class reviewModel {
  // add
  async add(userInfo, bodyData) {
    
    if (
      userInfo?.role_id === ROLES.ADMIN ||
      userInfo?.role_id === ROLES.SUPER_ADMIN
    ) {
      bodyData.user_id;
    } else {
      bodyData.user_id = userInfo?.id;
    }

    return await reviewSchema.create(bodyData);
  }

  // update
  async update(userInfo, bodyData) {
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

    if (
      userInfo?.role_id === ROLES.ADMIN ||
      userInfo?.role_id === ROLES.SUPER_ADMIN
    ) {
      bodyData.user_id;
    } else {
      bodyData.user_id = userInfo?.id;
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
