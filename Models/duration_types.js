const { Op } = require("sequelize");
const { STATUS_CODES, STATUS, IMAGE_PATHS } = require("../Config/constant");
const { duration_types: durationTypeSchema } = require("../Database/Schema");

class durationTypeModel {
  // add
  async add(bodyData) {
    let data = await durationTypeSchema.findOne({
      where: {
        name: bodyData?.name,
      },
    });

    if (data) {
      return {
        status: STATUS_CODES.ALREADY_REPORTED,
      };
    }

    return await durationTypeSchema.create(bodyData);
  }

  // update
  async update(bodyData) {
    let data = await durationTypeSchema.findOne({
      where: {
        id: bodyData?.id,
        is_delete: STATUS.NOTDELETED
      },
    });

    if (!data) {
      return {
        status: STATUS_CODES.NOT_FOUND,
      };
    }

    return await durationTypeSchema.update(bodyData, {
      where: {
        id: bodyData?.id,
      },
    });
  }

  // delete
  async delete(params) {
    const { id } = params;

    let data = await durationTypeSchema.findOne({
      where: {
        id,
        is_delete: STATUS.NOTDELETED
      },
    });

    if (!data) {
      return {
        status: STATUS_CODES.NOT_FOUND,
      };
    }

    return await durationTypeSchema.update({is_delete: STATUS.DELETED}, {
      where: { id },
    });
  }

  // get
  async get(params) {
    const { id } = params;

    let data = await durationTypeSchema.findOne({
      where: {
        id,
        is_delete: STATUS.NOTDELETED
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
    return list = await durationTypeSchema.findAll({
        where: {
            is_delete: STATUS.NOTDELETED
        }
    });
;
  }

}

module.exports = durationTypeModel;
