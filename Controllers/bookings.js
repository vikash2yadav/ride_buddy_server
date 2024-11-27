const bookingModel = new (require("../Models/bookings"))();
const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");

class bookingController {
  // add
  async add(req, res) {
    let response = await bookingModel.add(req?.userInfo, req?.body);

    res.handler.success(response, STATUS_MESSAGES.BOOKING.ADDED);
  }

  // update
  async update(req, res) {
    let response = await bookingModel.update(req?.userInfo, req?.body);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.BOOKING);
    }

    res.handler.success(response, STATUS_MESSAGES.BOOKING.UPDATED);
  }

  // delete
  async delete(req, res) {
    let response = await bookingModel.delete(req?.params);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.BOOKING);
    }

    res.handler.success(response, STATUS_MESSAGES.BOOKING.DELETED);
  }

  // get
  async get(req, res) {
    let response = await bookingModel.get(req?.params);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.BOOKING);
    }

    res.handler.success(response);
  }

  // list
  async list(req, res) {
    let response = await bookingModel.list(req?.body);

    res.handler.success(response);
  }
}

module.exports = bookingController;
