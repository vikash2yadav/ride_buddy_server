const userModel = new (require("../Models/users"))();
const { STATUS_MESSAGES } = require("../Config/constant");

class Authentication {
  constructor() {
    this.userAuth = this.userAuth.bind(this);
  }

  async userAuth(req, res, next) {
    let authToken = req.headers["user-token"];
    if (!authToken) {
      res.handler.validationError(undefined, STATUS_MESSAGES.TOKEN.INVALID);
      return false;
    }

    const userToken = await userModel.getUserInfo(authToken);

    if (!userToken) {
      res.handler.unauthorized();
      return;
    }

    req.userInfo = userToken
      ? userToken?.user
        ? userToken?.user["dataValues"]
        : null
      : null;
    next();
  }
}
module.exports = Authentication;
