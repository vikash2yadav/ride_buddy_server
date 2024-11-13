const { Op } = require("sequelize");
const { STATUS_CODES, STATUS } = require("../Config/constant");
const { bookings: bookingSchema } = require("../Database/Schema");

class bookingModel {
  // add
  async add(bodyData) {
    return await bookingSchema.create(bodyData);
  }

  // update
  async update(bodyData) {
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
    });
  }
}

module.exports = bookingModel;
