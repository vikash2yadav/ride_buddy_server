const { Op } = require("sequelize");
const { STATUS_CODES, STATUS } = require("../Config/constant");
const {
  brands: brandSchema,
  modells: modelSchema,
} = require("../Database/Schema");

class modelModel {
  // add
  async add(bodyData) {
    let data = await modelSchema.findOne({
      where: {
        name: bodyData?.name,
      },
    });

    if (data) {
      return {
        status: STATUS_CODES.ALREADY_REPORTED,
      };
    }

    return await modelSchema.create(bodyData);
  }

  // update
  async update(bodyData) {
    let data = await modelSchema.findOne({
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

    let existmodel = await modelSchema.findOne({
      where: {
        name: bodyData?.name,
        id: { [Op.ne]: bodyData?.id },
      },
    });

    if (existmodel) {
      return {
        status: STATUS_CODES.ALREADY_REPORTED,
      };
    }

    return await modelSchema.update(bodyData, {
      where: {
        id: bodyData?.id,
      },
    });
  }

  // delete
  async delete(params) {
    const { id } = params;

    let data = await modelSchema.findOne({
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

    return await modelSchema.update(
      { is_delete: STATUS.DELETED },
      {
        where: { id: id },
      }
    );
  }

  // get
  async get(params) {
    const { id } = params;

    let data = await modelSchema.findOne({
      where: {
        id: id,
        is_delete: false,
      },
      include: {
        model: brandSchema,
        attributes: ["name", "logo_url", "country_of_origin", "founded_year"],
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
    return await modelSchema.findAll({
      where: {
        is_delete: false,
      },
      include: {
        model: brandSchema,
        attributes: ["name", "logo_url", "country_of_origin", "founded_year"],
      },
    });
  }
}

module.exports = modelModel;
