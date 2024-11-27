const notificationModel = new (require("../Models/notifications"))();
const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");

class notificationController {
  // add
  async add(req, res) {
    let response = await notificationModel.add(req?.body);

    res.handler.success(response, STATUS_MESSAGES.NOTIFICATION.ADDED);
  }

  // update
  async update(req, res) {
    let response = await notificationModel.update(req?.body);

    if(response.status === STATUS_CODES.NOT_FOUND){
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.NOTIFICATION);
    }

    res.handler.success(response, STATUS_MESSAGES.NOTIFICATION.UPDATED);
  }

  // delete
  async delete(req, res) {
    let response = await notificationModel.delete(req?.params);

    if(response.status === STATUS_CODES.NOT_FOUND){
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.NOTIFICATION);
    }

    res.handler.success(response, STATUS_MESSAGES.NOTIFICATION.DELETED);
  }

  // get
  async get(req, res) {
    let response = await notificationModel.get(req?.params);

    if(response.status === STATUS_CODES.NOT_FOUND){
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.NOTIFICATION);
    }

    res.handler.success(response);
  }

  // list
  async list(req, res) {
    let response = await notificationModel.list(req?.body);

    res.handler.success(response);
  }
}

module.exports = notificationController;
