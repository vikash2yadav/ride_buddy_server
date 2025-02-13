const stateModel = new (require("../Models/states"))();
const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");

class stateController {
  // add
  async add(req, res) {
    let response = await stateModel.add(req?.userInfo, req?.body);

    res.handler.success(response, STATUS_MESSAGES.STATE.ADDED);
  }

  // update
  async update(req, res) {
    let response = await stateModel.update(req?.userInfo, req?.body);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.STATE);
    }

    res.handler.success(response, STATUS_MESSAGES.STATE.UPDATED);
  }

  // delete
  async delete(req, res) {
    let response = await stateModel.delete(req?.params);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.STATE);
    }

    res.handler.success(response, STATUS_MESSAGES.STATE.DELETED);
  }

  // get
  async get(req, res) {
    let response = await stateModel.get(req?.params);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.STATE);
    }

    res.handler.success(response);
  }

  // list
  async list(req, res) {
    let response = await stateModel.list(req?.body);

    res.handler.success(response);
  }
}

module.exports = stateController;
