const orderModel = new (require("../Models/orders"))();
const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");

class orderController {
  // add
  async add(req, res) {
    let response = await orderModel.add(req?.userInfo, req?.body);

    res.handler.success(response, STATUS_MESSAGES.ORDER.ADDED);
  }

  // update
  async update(req, res) {
    let response = await orderModel.update(req?.userInfo, req?.body);

    if(response.status === STATUS_CODES.NOT_FOUND){
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.ORDER);
    }

    if(response.status === STATUS_CODES.NOT_VALID_DATA){
        return res.handler.conflict(undefined, response.message);
    }

    res.handler.success(response, STATUS_MESSAGES.ORDER.UPDATED);
  }

  // delete
  async delete(req, res) {
    let response = await orderModel.delete(req?.params);

    if(response.status === STATUS_CODES.NOT_FOUND){
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.ORDER);
    }

    res.handler.success(response, STATUS_MESSAGES.ORDER.DELETED);
  }

  // get
  async get(req, res) {
    let response = await orderModel.get(req?.params);

    if(response.status === STATUS_CODES.NOT_FOUND){
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.ORDER);
    }

    res.handler.success(response);
  }

  // list
  async list(req, res) {
    let response = await orderModel.list(req?.body);

    res.handler.success(response);
  }
}

module.exports = orderController;
