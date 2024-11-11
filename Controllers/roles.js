const roleModel = new (require("../Models/roles"))();
const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");

class roleController {
  // add
  async add(req, res) {
    let response = await roleModel.add(req?.body);

    if(response.status === STATUS_CODES.ALREADY_REPORTED){
      return res.handler.conflict(undefined, STATUS_MESSAGES.EXISTS.ROLE);
    }

    res.handler.success(response, STATUS_MESSAGES.ROLE.ADDED);
  }

  // update
  async update(req, res) {
    let response = await roleModel.update(req?.body);

    if(response.status === STATUS_CODES.NOT_FOUND){
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.ROLE);
    }

    if(response.status === STATUS_CODES.ALREADY_REPORTED){
      return res.handler.notFound(undefined, STATUS_MESSAGES.EXISTS.ROLE);
    }

    res.handler.success(response, STATUS_MESSAGES.ROLE.UPDATED);
  }

  // delete
  async delete(req, res) {
    let response = await roleModel.delete(req?.params);

    if(response.status === STATUS_CODES.NOT_FOUND){
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.ROLE);
    }

    res.handler.success(response, STATUS_MESSAGES.ROLE.DELETED);
  }

  // get
  async get(req, res) {
    let response = await roleModel.get(req?.params);

    if(response.status === STATUS_CODES.NOT_FOUND){
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.ROLE);
    }

    res.handler.success(response);
  }

  // list
  async list(req, res) {
    let response = await roleModel.list(req?.body);

    res.handler.success(response);
  }
}

module.exports = roleController;
