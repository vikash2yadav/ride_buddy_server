const modulesModel = new (require("../Models/modules"))();
const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");

class moduleController {
  // add
  async add(req, res) {
    let response = await modulesModel.add(req?.body);

    if (response.status === STATUS_CODES.ALREADY_REPORTED) {
      return res.handler.conflict(undefined, STATUS_MESSAGES.EXISTS.MODULE);
    }

    res.handler.success(response, STATUS_MESSAGES.MODULE.ADDED);
  }

  // update
  async update(req, res) {
    let response = await modulesModel.update(req?.body);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.MODULE);
    }

    if (response.status === STATUS_CODES.ALREADY_REPORTED) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.EXISTS.MODULE);
    }

    res.handler.success(response, STATUS_MESSAGES.MODULE.UPDATED);
  }

  // delete
  async delete(req, res) {
    let response = await modulesModel.delete(req?.params);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.MODULE);
    }

    res.handler.success(response, STATUS_MESSAGES.MODULE.DELETED);
  }

  // get
  async get(req, res) {
    let response = await modulesModel.get(req?.params);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.MODULE);
    }

    res.handler.success(response);
  }

  // list
  async list(req, res) {
    let response = await modulesModel.list(req?.body);

    res.handler.success(response);
  }
}

module.exports = moduleController;
