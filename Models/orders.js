const { Op } = require("sequelize");
const { STATUS_CODES, STATUS, STATUS_MESSAGES, ROLES } = require("../Config/constant");
const {
  orders: orderSchema,
  orderDetails: orderDatailSchema,
  users: userSchema,
  vehicles: vehicleSchema
} = require("../Database/Schema");

class orderModel {
  // add
  async add(userInfo, bodyData) {
    // return console.log(bodyData?.orderDetails)
    const {orderDetails} = bodyData;

    if (
      userInfo?.role_id === ROLES.ADMIN ||
      userInfo?.role_id === ROLES.SUPER_ADMIN
    ) {
      bodyData.user_id;
    } else {
      bodyData.user_id = userInfo?.id;
    }

    let detail = await orderDatailSchema.create(orderDetails);

    return await orderSchema.create({...bodyData, order_detail_id: detail?.id});
  }

  // update
  async update(userInfo, bodyData) {
    const {orderDetails} = bodyData;

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

    if (
      userInfo?.role_id === ROLES.ADMIN ||
      userInfo?.role_id === ROLES.SUPER_ADMIN
    ) {
      bodyData.user_id;
    } else {
      bodyData.user_id = userInfo?.id;
    }

    await orderSchema.update(bodyData, {
      where: {
        id: bodyData?.id,
      },
    });

    await orderDatailSchema.update(orderDetails, {
        where: {
            id: data?.order_detail_id
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
