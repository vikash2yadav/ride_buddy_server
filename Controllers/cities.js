const cityModel = new (require("../Models/cities"))();
const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");

class cityController {
  // add
  async add(req, res) {
    let response = await cityModel.add(req?.userInfo, req?.body);

    res.handler.success(response, STATUS_MESSAGES.CITY.ADDED);
  }

  // update
  async update(req, res) {
    let response = await cityModel.update(req?.userInfo, req?.body);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.CITY);
    }

    res.handler.success(response, STATUS_MESSAGES.CITY.UPDATED);
  }

  // delete
  async delete(req, res) {
    let response = await cityModel.delete(req?.params);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.CITY);
    }

    res.handler.success(response, STATUS_MESSAGES.CITY.DELETED);
  }

  // get
  async get(req, res) {
    let response = await cityModel.get(req?.params);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.CITY);
    }

    res.handler.success(response);
  }

  // list
  async list(req, res) {
    let response = await cityModel.list(req?.body);

    res.handler.success(response);
  }

  // imp list
  async impList(req, res) {
    let response = await cityModel.impList();

    res.handler.success(response);
  }
}

module.exports = cityController;
