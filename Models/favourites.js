const { Op } = require("sequelize");
const { STATUS_CODES, STATUS, ROLES } = require("../Config/constant");
const {
  favourites: favouriteSchema,
  users: userSchema,
  vehicles: vehicleSchema,
} = require("../Database/Schema");

class favouriteModel {
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

    return await favouriteSchema.create(bodyData);
  }

  // update
  async update(userInfo, bodyData) {
    let data = await favouriteSchema.findOne({
      where: {
        id: bodyData?.id
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

    return await favouriteSchema.update(bodyData, {
      where: {
        id: bodyData?.id,
      },
    });
  }

  // delete
  async delete(params) {
    const { id } = params;

    let data = await favouriteSchema.findOne({
      where: {
        id,
      },
    });

    if (!data) {
      return {
        status: STATUS_CODES.NOT_FOUND,
      };
    }

    return await favouriteSchema.destroy({
      where: {
        id,
      },
    });
  }

  // get
  async get(params) {
    const { id } = params;

    let data = await favouriteSchema.findOne({
      where: {
        id,
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
    return await favouriteSchema.findAll({
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

module.exports = favouriteModel;
