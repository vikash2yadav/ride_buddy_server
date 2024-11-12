const { Op } = require("sequelize");
const { STATUS_CODES, STATUS } = require("../Config/constant");
const { roles: roleSchema } = require("../Database/Schema");

class roleModel {
  // add
  async add(bodyData) {
    let data = await roleSchema.findOne({
      where: {
        name: bodyData?.name,
      },
    });

    if (data) {
      return {
        status: STATUS_CODES.ALREADY_REPORTED,
      };
    }

    return await roleSchema.create(bodyData);
  }

  // update
  async update(bodyData) {
    let findRole = await roleSchema.findOne({
      where: {
        id: bodyData?.id,
        is_delete: false,
      },
    });

    if (!findRole) {
      return {
        status: STATUS_CODES.NOT_FOUND,
      };
    }

    let existRole = await roleSchema.findOne({
      where: {
        name: bodyData?.name,
        id: { [Op.ne]: bodyData?.id },
      },
    });

    if (existRole) {
      return {
        status: STATUS_CODES.ALREADY_REPORTED,
      };
    }

    return await roleSchema.update(bodyData, {
      where: {
        id: bodyData?.id,
      },
    });
  }

  // delete
  async delete(params) {
    const { id } = params;

    let findRole = await roleSchema.findOne({
      where: {
        id: id,
        is_delete: false,
      },
    });

    if (!findRole) {
      return {
        status: STATUS_CODES.NOT_FOUND,
      };
    }

    return await roleSchema.update(
      { is_delete: STATUS.DELETED },
      {
        where: { id: id },
      }
    );
  }

  // get
  async get(params) {
    const { id } = params;

    let findRole = await roleSchema.findOne({
      where: {
        id: id,
        is_delete: false,
      },
    });

    if (!findRole) {
      return {
        status: STATUS_CODES.NOT_FOUND,
      };
    }

    return await roleSchema.findOne({
      where: {
        id,
      },
    });
  }

  // list
  async list(bodyData) {
    return await roleSchema.findAll({
      where: {
        is_delete: false,
      },
    });
  }
}

module.exports = roleModel;
