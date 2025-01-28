const { Op } = require("sequelize");
const { STATUS_CODES, STATUS } = require("../Config/constant");
const { cities: citiesSchema } = require("../Database/Schema");

class cityModel {
  // add
  async add(bodyData) {
    let data = await citiesSchema.findOne({
      where: {
        name: bodyData?.name,
      },
    });

    if (data) {
      return {
        status: STATUS_CODES.ALREADY_REPORTED,
      };
    }

    return await citiesSchema.create(bodyData);
  }

  // update
  async update(bodyData) {
    let data = await citiesSchema.findOne({
      where: {
        id: bodyData?.id,
      },
    });

    if (!data) {
      return {
        status: STATUS_CODES.NOT_FOUND,
      };
    }

    let existcity = await citiesSchema.findOne({
      where: {
        name: bodyData?.name,
        id: { [Op.ne]: bodyData?.id },
      },
    });

    if (existcity) {
      return {
        status: STATUS_CODES.ALREADY_REPORTED,
      };
    }

    return await citiesSchema.update(bodyData, {
      where: {
        id: bodyData?.id,
      },
    });
  }

  // delete
  async delete(params) {
    const { id } = params;

    let data = await citiesSchema.findOne({
      where: {
        id: id,
      },
    });

    if (!data) {
      return {
        status: STATUS_CODES.NOT_FOUND,
      };
    }

    return await citiesSchema.destroy({
      where: { id },
    });
  }

  // get
  async get(params) {
    const { id } = params;

    let data = await citiesSchema.findOne({
      where: {
        id: id,
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
    let { filters } = bodyData;

    var filterQuery = {};
    if (filters) {
      Object.entries(filters).map(([key, value]) => {
        if (key != "" && value != "") {
          if (typeof value === "string") {
            filterQuery[key] = {
              [Op.like]: `%${value.trim()}%`,
            };
          } else {
            filterQuery[key] = {
              [Op.eq]: `${value}`,
            };
          }
        }
      });
    }

    return await citiesSchema.findAll({
      where: {
        ...filterQuery,
      },
    });
  }
}

module.exports = cityModel;
