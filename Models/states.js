const { Op } = require("sequelize");
const { STATUS_CODES, STATUS, IMAGE_PATHS } = require("../Config/constant");
const { states: stateSchema } = require("../Database/Schema");

class stateModel {
  // add
  async add(bodyData) {
    let data = await stateSchema.findOne({
      where: {
        name: bodyData?.name,
      },
    });

    if (data) {
      return {
        status: STATUS_CODES.ALREADY_REPORTED,
      };
    }

    return await stateSchema.create(bodyData);
  }

  // update
  async update(bodyData) {
    let data = await stateSchema.findOne({
      where: {
        id: bodyData?.id,
      },
    });

    if (!data) {
      return {
        status: STATUS_CODES.NOT_FOUND,
      };
    }

    return await stateSchema.update(bodyData, {
      where: {
        id: bodyData?.id,
      },
    });
  }

  // delete
  async delete(params) {
    const { id } = params;

    let data = await stateSchema.findOne({
      where: {
        id,
      },
    });

    if (!data) {
      return {
        status: STATUS_CODES.NOT_FOUND,
      };
    }

    return await stateSchema.destroy({
      where: { id },
    });
  }

  // get
  async get(params) {
    const { id } = params;

    let data = await stateSchema.findOne({
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
    let list = await stateSchema.findAll();

    let updatedList = list.map((state) => {
      return {
        ...state.toJSON(),
        icon: IMAGE_PATHS.LOCATION + state.icon,
      };
    });

    return updatedList;
  }
}

module.exports = stateModel;
