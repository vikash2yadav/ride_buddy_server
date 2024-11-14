const { Op } = require("sequelize");
const { STATUS_CODES, STATUS } = require("../Config/constant");
const { modules: moduleSchema } = require("../Database/Schema");

class modulesModel {
  // add
  async add(bodyData) {
    let data = await moduleSchema.findOne({
      where: {
        name: bodyData?.name,
      },
    });

    if (data) {
      return {
        status: STATUS_CODES.ALREADY_REPORTED,
      };
    }

    return await moduleSchema.create(bodyData);
  }

  // update
  async update(bodyData) {
    let data = await moduleSchema.findOne({
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

    let existmodule = await moduleSchema.findOne({
      where: {
        name: bodyData?.name,
        id: { [Op.ne]: bodyData?.id },
      },
    });

    if (existmodule) {
      return {
        status: STATUS_CODES.ALREADY_REPORTED,
      };
    }

    return await moduleSchema.update(bodyData, {
      where: {
        id: bodyData?.id,
      },
    });
  }

  // delete
  async delete(params) {
    const { id } = params;

    let data = await moduleSchema.findOne({
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

    return await moduleSchema.update(
      { is_delete: STATUS.DELETED },
      {
        where: { id: id },
      }
    );
  }

  // get
  async get(params) {
    const { id } = params;

    let data = await moduleSchema.findOne({
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
    return await moduleSchema.findAll({
      where: {
        is_delete: false,
      },
    });
  }
}

module.exports = modulesModel;
