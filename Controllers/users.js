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
  async update(req, res) {
    let response = await userModel.update(req?.userInfo, req?.body);
    res.handler.success(response, STATUS_MESSAGES.USER.UPDATED);
  }

  // Delete account
  async deleteAccount(req, res) {
    let response = await userModel.deleteAccount(req?.userInfo);

    res.handler.success(response, STATUS_MESSAGES.USER.DELETED);
  }

  // Status change
  async statusChange(req, res) {
    let response = await userModel.statusChange(req?.userInfo, req?.body);

    res.handler.success(response, response?.message);
  }

  // reset password
  async resetPassword(req, res) {
    let response = await userModel.resetPassword(req?.userInfo, req?.body);

    if (response.status === STATUS_CODES.NOT_VALID_DATA) {
      return res.handler.conflict(undefined, response?.message);
    }

    res.handler.success(response, STATUS_MESSAGES.PASSWORD.CHANGED);
  }

  // send otp to email
  async sendOtpToEmail(req, res) {
    let response = await userModel.sendOtpToEmail(req?.body);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.conflict(undefined, STATUS_MESSAGES.NOT_FOUND.EMAIL);
    }

    res.handler.success(undefined, STATUS_MESSAGES.OTP_SUCCESS);
  }

  // check otp
  async checkOtp(req, res) {
    let response = await userModel.checkOtp(req?.userInfo, req?.body);

    res.handler.success(undefined, STATUS_MESSAGES.OTP_MATCHED);
  }

  // change password
  async changePassword(req, res) {
    let response = await userModel.changePassword(req?.body);

    if (response.status === STATUS_CODES.NOT_VALID_DATA) {
      return res.handler.conflict(undefined, STATUS_MESSAGES.PASSWORD.NOT_SAME);
    }

    res.handler.success(response, STATUS_MESSAGES.PASSWORD.CHANGED);
  }

  // send token 
  async sendToken(req, res){
    let response = await userModel.sendToken(req?.body);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.EMAIL);
    }

    res.handler.success(response, STATUS_MESSAGES.TOKEN.SENT);
  }

  // reset password by token
  async resetPasswordByToken(req, res) {
    let response = await userModel.resetPasswordByToken(req);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, response?.message);
    }

    if (response.status === STATUS_CODES.NOT_VALID_DATA) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.PASSWORD.NOT_SAME);
    }

    res.handler.success(response, STATUS_MESSAGES.PASSWORD.CHANGED);
  }

  // find user by id
  async findUserByUsername(req, res){
    let response = await userModel.findUserByUsername(req?.params);

    if (response.status === STATUS_CODES.NOT_FOUND) {
      return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.USERNAME);
    }

    res.handler.success(response);
  }
}

module.exports = userController;
