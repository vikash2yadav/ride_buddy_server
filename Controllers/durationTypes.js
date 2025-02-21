const durationTypeModel = new (require("../Models/duration_types"))();
const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");

class durationTypeController {
  // add
  async add(req, res) {
    let response = await durationTypeModel.add(req?.userInfo, req?.body);

    res.handler.success(response, STATUS_MESSAGES.DURATION_TYPE.ADDED);
  }

  // update
  async update(req, res) {
    let response = await durationTypeModel.update(req?.userInfo, req?.body);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.DURATION_TYPE);
    }

    res.handler.success(response, STATUS_MESSAGES.DURATION_TYPE.UPDATED);
  }

  // delete
  async delete(req, res) {
    let response = await durationTypeModel.delete(req?.params);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.DURATION_TYPE);
    }

    res.handler.success(response, STATUS_MESSAGES.DURATION_TYPE.DELETED);
  }

  // get
  async get(req, res) {
    let response = await durationTypeModel.get(req?.params);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.DURATION_TYPE);
    }

    res.handler.success(response);
  }

  // list
  async list(req, res) {
    let response = await durationTypeModel.list(req?.body);

    res.handler.success(response);
  }
  
}

module.exports = durationTypeController;
