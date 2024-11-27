const { Op } = require("sequelize");
const { STATUS_CODES, STATUS, IMAGE_PATHS } = require("../Config/constant");
const { brands: brandSchema } = require("../Database/Schema");

class brandModel {
  // add
  async add(bodyData) {
    let data = await brandSchema.findOne({
      where: {
        name: bodyData?.name,
      },
    });

    if (data) {
      return {
        status: STATUS_CODES.ALREADY_REPORTED,
      };
    }

    return await brandSchema.create(bodyData);
  }

  // update
  async update(bodyData) {
    let data = await brandSchema.findOne({
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

    let existBrand = await brandSchema.findOne({
      where: {
        name: bodyData?.name,
        id: { [Op.ne]: bodyData?.id },
      },
    });

    if (existBrand) {
      return {
        status: STATUS_CODES.ALREADY_REPORTED,
      };
    }

    return await brandSchema.update(bodyData, {
      where: {
        id: bodyData?.id,
      },
    });
  }

  // delete
  async delete(params) {
    const { id } = params;

    let data = await brandSchema.findOne({
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

    return await brandSchema.update(
      { is_delete: STATUS.DELETED },
      {
        where: { id: id },
      }
    );
  }

  // get
  async get(params) {
    const { id } = params;

    let data = await brandSchema.findOne({
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
    const brands = await brandSchema.findAll({
      where: {
        is_delete: false,
      },
    });
  
    const updatedBrands = brands.map(brand => {
      return {
        ...brand.toJSON(),  
        logo_url: IMAGE_PATHS.BRAND + brand.logo_url, 
      };
    });
  
    return updatedBrands;
  }
}

module.exports = brandModel;
