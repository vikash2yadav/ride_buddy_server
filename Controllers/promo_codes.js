const promoCodeModel = new (require("../Models/promo_codes"))();
const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");

class promoCodeController {
  // add
  async add(req, res) {
    let response = await promoCodeModel.add(req?.userInfo, req?.body);

    if (response.status === STATUS_CODES.ALREADY_REPORTED) {
        return res.handler.notFound(undefined, STATUS_MESSAGES.EXISTS.PROMO_CODE);
      }

    res.handler.success(response, STATUS_MESSAGES.PROMO_CODE.ADDED);
  }

  // update
  async update(req, res) {
    let response = await promoCodeModel.update(req?.userInfo, req?.body);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.PROMO_CODE);
    }
    
    if (response.status === STATUS_CODES.ALREADY_REPORTED) {
        return res.handler.notFound(undefined, STATUS_MESSAGES.EXISTS.PROMO_CODE);
      }
    
    res.handler.success(response, STATUS_MESSAGES.PROMO_CODE.UPDATED);
  }

  // delete
  async delete(req, res) {
    let response = await promoCodeModel.delete(req?.params);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.PROMO_CODE);
    }

    res.handler.success(response, STATUS_MESSAGES.PROMO_CODE.DELETED);
  }

  // get
  async get(req, res) {
    let response = await promoCodeModel.get(req?.params);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.PROMO_CODE);
    }

    res.handler.success(response);
  }

  // list
  async list(req, res) {
    let response = await promoCodeModel.list(req?.body);

    res.handler.success(response);
  }
}

module.exports = promoCodeController;
