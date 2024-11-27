const modelModel = new (require("../Models/models"))();
const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");

class modelController {
  // add
  async add(req, res) {
    let response = await modelModel.add(req?.body);

    if(response.status === STATUS_CODES.ALREADY_REPORTED){
      return res.handler.conflict(undefined, STATUS_MESSAGES.EXISTS.MODEL);
    }

    res.handler.success(response, STATUS_MESSAGES.MODEL.ADDED);
  }

  // update
  async update(req, res) {
    let response = await modelModel.update(req?.body);

    if(response.status === STATUS_CODES.NOT_FOUND){
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.MODEL);
    }

    if(response.status === STATUS_CODES.ALREADY_REPORTED){
      return res.handler.notFound(undefined, STATUS_MESSAGES.EXISTS.MODEL);
    }

    res.handler.success(response, STATUS_MESSAGES.MODEL.UPDATED);
  }

  // delete
  async delete(req, res) {
    let response = await modelModel.delete(req?.params);

    if(response.status === STATUS_CODES.NOT_FOUND){
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.MODEL);
    }

    res.handler.success(response, STATUS_MESSAGES.MODEL.DELETED);
  }

  // get
  async get(req, res) {
    let response = await modelModel.get(req?.params);

    if(response.status === STATUS_CODES.NOT_FOUND){
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.MODEL);
    }

    res.handler.success(response);
  }

  // list
  async list(req, res) {
    let response = await modelModel.list(req?.body);

    res.handler.success(response);
  }
}

module.exports = modelController;
