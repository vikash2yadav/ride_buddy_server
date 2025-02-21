const durationValueModel = new (require("../Models/duration_values"))();
const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");

class durationValueController {
  // add
  async add(req, res) {
    let response = await durationValueModel.add(req?.userInfo, req?.body);

    res.handler.success(response, STATUS_MESSAGES.DURATION_VALUE.ADDED);
  }

  // update
  async update(req, res) {
    let response = await durationValueModel.update(req?.userInfo, req?.body);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(
        undefined,
        STATUS_MESSAGES.NOT_FOUND.DURATION_VALUE
      );
    }

    res.handler.success(response, STATUS_MESSAGES.DURATION_VALUE.UPDATED);
  }

  // delete
  async delete(req, res) {
    let response = await durationValueModel.delete(req?.params);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(
        undefined,
        STATUS_MESSAGES.NOT_FOUND.DURATION_VALUE
      );
    }

    res.handler.success(response, STATUS_MESSAGES.DURATION_VALUE.DELETED);
  }

  // get
  async get(req, res) {
    let response = await durationValueModel.get(req?.params);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(
        undefined,
        STATUS_MESSAGES.NOT_FOUND.DURATION_VALUE
      );
    }

    res.handler.success(response);
  }

  // list
  async list(req, res) {
    let response = await durationValueModel.list(req?.body);

    res.handler.success(response);
  }
}

module.exports = durationValueController;
