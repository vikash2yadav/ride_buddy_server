const { Op } = require("sequelize");
const { STATUS_CODES, STATUS } = require("../Config/constant");
const {
  payments: paymentSchema,
  bookings: bookingSchema,
} = require("../Database/Schema");
const { v4: uuidv4 } = require("uuid");

function generateTransactionId() {
  const uuidPart = uuidv4();
  const timestamp = Date.now();
  const randomStr = Math.random().toString(36).substr(2, 6);
  const transactionId = `${uuidPart}-${timestamp}-${randomStr}`;
  return transactionId;
}

class paymentModel {
  // add
  async add(bodyData) {
    let transaction_id = generateTransactionId();

    return await paymentSchema.create({ ...bodyData, transaction_id });
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
    return await paymentSchema.findAll({
      where: {
        is_delete: false,
      },
      include: [
        {
          model: bookingSchema,
        },
      ],
    });
  }
}

module.exports = paymentModel;
