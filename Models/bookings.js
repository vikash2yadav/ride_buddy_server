const { Op } = require("sequelize");
const { STATUS_CODES, STATUS, ROLES } = require("../Config/constant");
const { bookings: bookingSchema, users: userSchema, vehicles: vehicleSchema } = require("../Database/Schema");

class bookingModel {
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

    return await bookingSchema.create(bodyData);
  }

  // update
  async update(userInfo, bodyData) {
    let data = await bookingSchema.findOne({
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
      bodyData.user_id = bodyData?.user_id;
    } else {
      bodyData.user_id = userInfo?.id;
    }

    return await bookingSchema.update(bodyData, {
      where: {
        id: bodyData?.id,
      },
    });
  }

  // delete
  async delete(params) {
    const { id } = params;

    let data = await bookingSchema.findOne({
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

    return await bookingSchema.update(
      { is_delete: STATUS.DELETED },
      {
        where: { id: id },
      }
    );
  }

  // get
  async get(params) {
    const { id } = params;

    let data = await bookingSchema.findOne({
      where: {
        id: id,
        is_delete: false,
      },
      include: [{
        model: userSchema
      },{
        model: vehicleSchema
      }]
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
    return await bookingSchema.findAll({
      where: {
        is_delete: false,
      },
      include: [{
        model: userSchema
      },{
        model: vehicleSchema
      }]
    });
  }
}

module.exports = bookingModel;
