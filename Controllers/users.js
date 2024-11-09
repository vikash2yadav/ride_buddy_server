const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");

const userModel = new (require("../Models/users"))();

class userController {
  // Sign Up
  async signUp(req, res) {
    try {
      let response = await userModel.signUp(req?.body);

      if (response.status === STATUS_CODES.NOT_VALID_DATA) {
        return res.handler.conflict(
          undefined,
          STATUS_MESSAGES.PASSWORD.NOT_SAME
        );
      }

      if (response.status === STATUS_CODES.ALREADY_REPORTED) {
        return res.handler.conflict(undefined, response?.message);
      }

      res.handler.success(response, STATUS_MESSAGES.USER.REGISTERED);
    } catch (error) {
      res.handler.serverError(error);
    }
  }

  // Sign In
  async signIn(req, res) {
    try {
      let response = await userModel.signIn(req.body);

      if (response.status === STATUS_CODES.NOT_FOUND) {
        return res.handler.conflict(undefined, response?.message);
      }

      if (response.status === STATUS_CODES.NOT_VALID_DATA) {
        return res.handler.conflict(
          undefined,
          STATUS_MESSAGES.PASSWORD.INCORRECT
        );
      }

      res.handler.success(response, STATUS_MESSAGES.USER.LOGIN);
    } catch (error) {
      res.handler.serverError(error);
    }
  }

  // get profile
  async getProfile(req, res) {
    let response = await userModel.getProfile(req?.userInfo);
    res.handler.success(response);
  }

  // update 
  async update(req, res){
    let response = await userModel.update(req?.userInfo, req?.body);
    res.handler.success(response);
  }
}

module.exports = userController;
