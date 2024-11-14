const brandModel = new (require("../Models/brands"))();
const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");

class brandController {
  // add
  async add(req, res) {
    let response = await brandModel.add(req?.body);

    if (response.status === STATUS_CODES.ALREADY_REPORTED) {
      return res.handler.conflict(undefined, STATUS_MESSAGES.EXISTS.BRAND);
    }

    res.handler.success(response, STATUS_MESSAGES.BRAND.ADDED);
  }

  // update
  async update(req, res) {
    let response = await brandModel.update(req?.body);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.BRAND);
    }

    if (response.status === STATUS_CODES.ALREADY_REPORTED) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.EXISTS.BRAND);
    }

    res.handler.success(response, STATUS_MESSAGES.BRAND.UPDATED);
  }

  // delete
  async delete(req, res) {
    let response = await brandModel.delete(req?.params);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.BRAND);
    }

    res.handler.success(response, STATUS_MESSAGES.BRAND.DELETED);
  }

  // get
  async get(req, res) {
    let response = await brandModel.get(req?.params);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.BRAND);
    }

    res.handler.success(response);
  }

  // list
  async list(req, res) {
    let response = await brandModel.list(req?.body);

    res.handler.success(response);
  }
}

module.exports = brandController;
