const { Op } = require("sequelize");
const { STATUS_CODES, STATUS, STATUS_MESSAGES } = require("../Config/constant");
const {
  orders: orderSchema,
  orderDetails: orderDatailSchema,
  users: userSchema,
  vehicles: vehicleSchema
} = require("../Database/Schema");

class orderModel {
  // add
  async add(bodyData) {
    const {orderDetails} = bodyData;

    let data = await orderSchema.findOne({
      where: {
        user_id: bodyData?.user_id,
        vehicle_id: bodyData?.vehicle_id,
        status: STATUS.ACTIVE || STATUS.PENDING
      },
    });

    if (data) {
      return {
        status: STATUS_CODES.ALREADY_REPORTED,
      };
    }

    let detail = await orderDatailSchema.create(orderDetails);

    return await orderSchema.create({...bodyData, order_detail_id: detail?.id});
  }

  // update
  async update(bodyData) {
    const {order_Details} = bodyData;

    let data = await orderSchema.findOne({
      where: {
        id: bodyData?.id,
        is_delete: false
      },
    });

    if(data?.status === STATUS.CANCELLED){
        return {
            status: STATUS_CODES.NOT_VALID_DATA,
            message: STATUS_MESSAGES.ORDER.CANCELLED
        }
    }

    if(data?.status === STATUS.COMPLETED){
        return {
            status: STATUS_CODES.NOT_VALID_DATA,
            message: STATUS_MESSAGES.ORDER.COMPLETED
        }
    }

    if (!data) {
      return {
        status: STATUS_CODES.NOT_FOUND,
      };
    }

    await orderSchema.update(bodyData, {
      where: {
        id: bodyData?.id,
      },
    });

    await orderDatailSchema.update(order_Details, {
        where: {
            order_id: bodyData?.id
        }
    });
    return true;
  }

  // delete
  async delete(params) {
    const { id } = params;

    let data = await orderSchema.findOne({
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

    return await orderSchema.update(
      { is_delete: STATUS.DELETED },
      {
        where: { id: id },
      }
    );
  }

  // get
  async get(params) {
    const { id } = params;

    let data = await orderSchema.findOne({
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
        {
          model: orderDatailSchema,
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
    return await orderSchema.findAll({
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
        {
          model: orderDatailSchema
        }
      ],
    });
  }
}

module.exports = orderModel;
