const paymentModel = new (require("../Models/payments"))();
const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");

class paymentController {
  // add
  async add(req, res) {
    let response = await paymentModel.add(req?.body);

    res.handler.success(response, STATUS_MESSAGES.PAYMENT.ADDED);
  }

  // update
  async update(req, res) {
    let response = await paymentModel.update(req?.body);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.PAYMENT);
    }
    
    res.handler.success(response, STATUS_MESSAGES.PAYMENT.UPDATED);
  }

  // delete
  async delete(req, res) {
    let response = await paymentModel.delete(req?.params);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.PAYMENT);
    }

    res.handler.success(response, STATUS_MESSAGES.PAYMENT.DELETED);
  }

  // get
  async get(req, res) {
    let response = await paymentModel.get(req?.params);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.PAYMENT);
    }

    res.handler.success(response);
  }

  // list
  async list(req, res) {
    let response = await paymentModel.list(req?.body);

    res.handler.success(response);
  }
}

module.exports = paymentController;
