const favouriteModel = new (require("../Models/favourites"))();
const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");

class favouriteController {
  // add
  async add(req, res) {
    let response = await favouriteModel.add(req?.userInfo, req?.body);

    res.handler.success(response, STATUS_MESSAGES.FAVOURITE.ADDED);
  }

  // update
  async update(req, res) {
    let response = await favouriteModel.update(req?.userInfo, req?.body);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.FAVOURITE);
    }

    res.handler.success(response, STATUS_MESSAGES.FAVOURITE.UPDATED);
  }

  // delete
  async delete(req, res) {
    let response = await favouriteModel.delete(req?.params);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.FAVOURITE);
    }

    res.handler.success(response, STATUS_MESSAGES.FAVOURITE.DELETED);
  }

  // get
  async get(req, res) {
    let response = await favouriteModel.get(req?.params);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.FAVOURITE);
    }

    res.handler.success(response);
  }

  // list
  async list(req, res) {
    let response = await favouriteModel.list(req?.body);

    res.handler.success(response);
  }
}

module.exports = favouriteController;
