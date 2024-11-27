const userModel = new (require("../Models/users"))();
const { STATUS_MESSAGES, ROLES } = require("../Config/constant");
const { permissions: permissionSchema } = require("../Database/Schema");

class Authentication {
  constructor() {
    this.checkAccess = this.checkAccess.bind(this);
  }

  checkAccess(module_id, access_type) {
    return async (req, res, next) => {
      const authToken = req.headers["user-token"];
      if (!authToken) {
        return res.handler.validationError(
          undefined,
          STATUS_MESSAGES.TOKEN.INVALID
        );
      }

      const userToken = await userModel.getUserInfo(authToken);

      if (!userToken) {
        return res.handler.unauthorized();
      }

      req.userInfo = userToken?.user ? userToken.user["dataValues"] : null;

      if (!module_id || !access_type) {
        return res.handler.validationError(
          undefined,
          STATUS_MESSAGES.SERVER_ERROR
        );
      }

      let check = await permissionSchema.findOne({
        where: {
          module_id: module_id,
          role_id: req?.userInfo?.role_id,
        },
      });

      if (!check) {
        return res.handler.unauthorized(
          undefined,
          STATUS_MESSAGES.NOT_FOUND.PERMISSION
        );
      }

      const permissionGranted = check[access_type];

      if (!permissionGranted) {
        return res.handler.unauthorized(
          undefined,
          `You don't have ${access_type} permission for this module.`
        );
      }

      next();
    };
  }
}

module.exports = Authentication;
