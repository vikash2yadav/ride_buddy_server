const { Op } = require("sequelize");
const { STATUS_CODES } = require("../Config/constant");
const {
  partner_requests: partnerRequestSchema,
} = require("../Database/Schema");

class partnerRequestModel {
  // add
  async add(bodyData) {
    return await partnerRequestSchema.create(bodyData);
  }

  // update
  async update(userInfo, bodyData) {
    let checkRequest = await partnerRequestSchema.findOne({
      where: {
        id: bodyData?.id,
      },
    });

    if (!checkRequest) {
      return {
        status: STATUS_CODES.NOT_FOUND,
      };
    }

    return await partnerRequestSchema.update(bodyData, {
      where: {
        id: bodyData?.id,
      },
    });
  }

  // delete
  async delete(params) {
    const { id } = params;

    let data = await partnerRequestSchema.findOne({
      where: {
        id: id,
      },
    });

    if (!data) {
      return {
        status: STATUS_CODES.NOT_FOUND,
      };
    }

    return await partnerRequestSchema.destroy({
      where: {
        id,
      },
    });
  }

  // get
  async get(params) {
    const { id } = params;

    let data = await partnerRequestSchema.findOne({
      where: {
        id,
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
    return await partnerRequestSchema.findAll();
  }
}

module.exports = partnerRequestModel;
