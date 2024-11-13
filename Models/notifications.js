const { Op } = require("sequelize");
const { STATUS_CODES, STATUS, STATUS_MESSAGES } = require("../Config/constant");
const {
  notifications: notificationSchema,
  users: userSchema,
} = require("../Database/Schema");

class notificationModel {
  // add
  async add(bodyData) {
    return await notificationSchema.create(bodyData);
  }

  // update
  async update(bodyData) {
    let data = await notificationSchema.findOne({
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

    return await notificationSchema.update(bodyData, {
      where: {
        id: bodyData?.id,
      },
    });
  }

  // delete
  async delete(params) {
    const { id } = params;

    let data = await notificationSchema.findOne({
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

    return await notificationSchema.update(
      { is_delete: STATUS.DELETED },
      {
        where: { id: id },
      }
    );
  }

  // get
  async get(params) {
    const { id } = params;

    let data = await notificationSchema.findOne({
      where: {
        id: id,
        is_delete: false,
      },
      include: [
        {
          model: userSchema,
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
    return await notificationSchema.findAll({
      where: {
        is_delete: false,
      },
      include: [
        {
          model: userSchema,
        },
      ],
    });
  }
}

module.exports = notificationModel;
