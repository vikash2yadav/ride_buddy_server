const userModel = new (require("../Models/users"))();
const { STATUS_MESSAGES, ROLES } = require("../Config/constant");

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

  async adminAuth(req, res, next) {
    let authToken = req.headers["user-token"];
    if (!authToken) {
      res.handler.validationError(undefined, STATUS_MESSAGES.TOKEN.INVALID);
      return false;
    }

    const userToken = await userModel.getUserInfo(authToken);

    if (userToken?.user?.role_id === ROLES.SUPER_ADMIN || ROLES.ADMIN) {
      req.userInfo = userToken
        ? userToken?.user
          ? userToken?.user["dataValues"]
          : null
        : null;
      next();
    } else {
      res.handler.unauthorized();
      return;
    }
  }
}
module.exports = Authentication;
