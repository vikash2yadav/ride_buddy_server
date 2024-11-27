const reviewModel = new (require("../Models/reviews"))();
const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");

class reviewController {
  // add
  async add(req, res) {
    let response = await reviewModel.add(req?.userInfo, req?.body);

    res.handler.success(response, STATUS_MESSAGES.REVIEW.ADDED);
  }

  // update
  async update(req, res) {
    let response = await reviewModel.update(req?.userInfo, req?.body);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.REVIEW);
    }
    
    res.handler.success(response, STATUS_MESSAGES.REVIEW.UPDATED);
  }

  // delete
  async delete(req, res) {
    let response = await reviewModel.delete(req?.params);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.REVIEW);
    }

    res.handler.success(response, STATUS_MESSAGES.REVIEW.DELETED);
  }

  // get
  async get(req, res) {
    let response = await reviewModel.get(req?.params);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.REVIEW);
    }

    res.handler.success(response);
  }

  // list
  async list(req, res) {
    let response = await reviewModel.list(req?.body);

    res.handler.success(response);
  }
}

module.exports = reviewController;
