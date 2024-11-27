const { Op } = require("sequelize");
const { STATUS_CODES, STATUS, IMAGE_PATHS } = require("../Config/constant");
const { cities: citySchema } = require("../Database/Schema");

class cityModel {
  // add
  async add(bodyData) {
    let data = await citySchema.findOne({
      where: {
        name: bodyData?.name,
      },
    });

    if (data) {
      return {
        status: STATUS_CODES.ALREADY_REPORTED,
      };
    }

    return await citySchema.create(bodyData);
  }

  // update
  async update(bodyData) {
    let data = await citySchema.findOne({
      where: {
        id: bodyData?.id,
      },
    });

    if (!data) {
      return {
        status: STATUS_CODES.NOT_FOUND,
      };
    }

    return await citySchema.update(bodyData, {
      where: {
        id: bodyData?.id,
      },
    });
  }

  // delete
  async delete(params) {
    const { id } = params;

    let data = await citySchema.findOne({
      where: {
        id,
      },
    });

    if (!data) {
      return {
        status: STATUS_CODES.NOT_FOUND,
      };
    }

    return await citySchema.destroy({
      where: { id },
    });
  }

  // get
  async get(params) {
    const { id } = params;

    let data = await citySchema.findOne({
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
    let list = await citySchema.findAll();

    let updatedList = list.map((city) => {
      return {
        ...city.toJSON(),
        icon: IMAGE_PATHS.LOCATION + city.icon,
      };
    });

    return updatedList;
  }

  // imp list
  async impList() {
    let implist = await citySchema.findAll({
      where: {
        imp: true,
      },
    });

    let updatedList = implist.map((city) => {
      return {
        ...city.toJSON(),
        icon: IMAGE_PATHS.LOCATION + city.icon,
      };
    });
    return updatedList;
  }
}

module.exports = cityModel;
