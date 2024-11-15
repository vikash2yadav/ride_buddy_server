const { Op } = require("sequelize");
const { STATUS_CODES, STATUS } = require("../Config/constant");
const { promo_codes: promoCodeSchema, users: userSchema } = require("../Database/Schema");

class promoCodeModel {
  // add
  async add(userInfo, bodyData) {
    bodyData.created_by = userInfo?.id;

    let findPromo = await promoCodeSchema.findOne({
      where: {
        code: bodyData?.code,
      },
    });

    if (findPromo) {
      return {
        status: STATUS_CODES.ALREADY_REPORTED,
      };
    }

    return await promoCodeSchema.create(bodyData);
  }

  // update
  async update(userInfo, bodyData) {
    bodyData.created_by = userInfo?.id;

    let data = await promoCodeSchema.findOne({
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

    let findPromo = await promoCodeSchema.findOne({
        where: {
          code: bodyData?.code,
        },
      });
  
      if (findPromo) {
        return {
          status: STATUS_CODES.ALREADY_REPORTED,
        };
      }
  

    return await promoCodeSchema.update(bodyData, {
      where: {
        id: bodyData?.id,
      },
    });
  }

  // delete
  async delete(params) {
    const { id } = params;

    let data = await promoCodeSchema.findOne({
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

    return await promoCodeSchema.update(
      { is_delete: STATUS.DELETED },
      {
        where: { id: id },
      }
    );
  }

  // get
  async get(params) {
    const { id } = params;

    let data = await promoCodeSchema.findOne({
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
    return await promoCodeSchema.findAll({
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

module.exports = promoCodeModel;
