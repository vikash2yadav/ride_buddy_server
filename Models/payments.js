const { Op } = require("sequelize");
const { STATUS_CODES, STATUS } = require("../Config/constant");
const {
  payments: paymentSchema,
  booking: bookingSchema
} = require("../Database/Schema");

class paymentModel {
  // add
  async add(bodyData) {
    return await paymentSchema.create(bodyData);
  }

  // update
  async update(bodyData) {
    let data = await paymentSchema.findOne({
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

    return await paymentSchema.update(bodyData, {
      where: {
        id: bodyData?.id,
      },
    });
  }

  // delete
  async delete(params) {
    const { id } = params;

    let data = await paymentSchema.findOne({
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

    return await paymentSchema.update(
      { is_delete: STATUS.DELETED },
      {
        where: { id: id },
      }
    );
  }

  // get
  async get(params) {
    const { id } = params;

    let data = await paymentSchema.findOne({
      where: {
        id: id,
        is_delete: false,
      },
      include: [
        {
          model: bookingSchema,
        }
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
    return await paymentSchema.findAll({
      where: {
        is_delete: false,
      },
      include: [
        {
          model: bookingSchema,
        }
      ],
    });
  }
}

module.exports = paymentModel;
