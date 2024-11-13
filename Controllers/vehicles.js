const vehicleModel = new (require("../Models/vehicles"))();
const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");

class vehicleController {
  // add
  async add(req, res) {
    let response = await vehicleModel.add(req?.body);

    if(response.status === STATUS_CODES.ALREADY_REPORTED){
      return res.handler.conflict(undefined, STATUS_MESSAGES.EXISTS.VEHICLE);
    }

    res.handler.success(response, STATUS_MESSAGES.VEHICLE.ADDED);
  }

  // update
  async update(req, res) {
    let response = await vehicleModel.update(req?.body);

    if(response.status === STATUS_CODES.NOT_FOUND){
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.VEHICLE);
    }

    if(response.status === STATUS_CODES.ALREADY_REPORTED){
      return res.handler.notFound(undefined, STATUS_MESSAGES.EXISTS.VEHICLE);
    }

    res.handler.success(response, STATUS_MESSAGES.VEHICLE.UPDATED);
  }

  // delete
  async delete(req, res) {
    let response = await vehicleModel.delete(req?.params);

    if(response.status === STATUS_CODES.NOT_FOUND){
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.VEHICLE);
    }

    res.handler.success(response, STATUS_MESSAGES.VEHICLE.DELETED);
  }

  // get
  async get(req, res) {
    let response = await vehicleModel.get(req?.params);

    if(response.status === STATUS_CODES.NOT_FOUND){
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.VEHICLE);
    }

    res.handler.success(response);
  }

  // list
  async list(req, res) {
    let response = await vehicleModel.list(req?.body);

    res.handler.success(response);
  }
}

module.exports = vehicleController;
