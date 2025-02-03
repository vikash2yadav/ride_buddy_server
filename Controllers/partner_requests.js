const partnerRequestModel = new (require("../Models/partner_requests"))();
const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");

class partnerRequestController {
  // add
  async add(req, res) {
    let response = await partnerRequestModel.add(req?.body);

    res.handler.success(response, STATUS_MESSAGES.PARTNER_REQUEST.ADDED);
  }

  // update
  async update(req, res) {
    let response = await partnerRequestModel.update(req?.userInfo, req?.body);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(
        undefined,
        STATUS_MESSAGES.NOT_FOUND.PARTNER_REQUEST
      );
    }

    if (response.status === STATUS_CODES.NOT_VALID_DATA) {
      return res.handler.conflict(undefined, response.message);
    }

    res.handler.success(response, STATUS_MESSAGES.PARTNER_REQUEST.UPDATED);
  }

  // delete
  async delete(req, res) {
    let response = await partnerRequestModel.delete(req?.params);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(
        undefined,
        STATUS_MESSAGES.NOT_FOUND.PARTNER_REQUEST
      );
    }

    res.handler.success(response, STATUS_MESSAGES.PARTNER_REQUEST.DELETED);
  }

  // get
  async get(req, res) {
    let response = await partnerRequestModel.get(req?.params);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(
        undefined,
        STATUS_MESSAGES.NOT_FOUND.PARTNER_REQUEST
      );
    }

    res.handler.success(response);
  }

  // list
  async list(req, res) {
    let response = await partnerRequestModel.list(req?.body);

    res.handler.success(response);
  }
}

module.exports = partnerRequestController;
