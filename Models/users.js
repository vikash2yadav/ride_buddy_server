const jwt = require("jsonwebtoken");
const { STATUS_CODES, STATUS_MESSAGES, STATUS } = require("../Config/constant");
const {
  users: userSchema,
  user_tokens: userTokenSchema,
} = require("../Database/Schema");
const bcrypt = require("bcrypt");

class userModel {
  //Get User Info
  async getUserInfo(access_token) {
    return await userTokenSchema.findOne({
      where: {
        access_token,
      },
      attributes: ["access_token"],
      include: {
        model: userSchema,
        where: {
          is_delete: false,
          status: 'active'
        },
        attributes: [
          "id",
          "fullname",
          "username",
          "role",
          "license_number",
          "last_login",
        ],
      },
    });
  }

  // Sign Up
  async signUp(bodyData) {
    if (bodyData?.password !== bodyData?.confirm_password) {
      return {
        status: STATUS_CODES.NOT_VALID_DATA,
      };
    }

    let existEmail = await userSchema.findOne({
      where: {
        email: bodyData?.email,
      },
    });

    if (existEmail) {
      return {
        status: STATUS_CODES.ALREADY_REPORTED,
        message: STATUS_MESSAGES.EXISTS.EMAIL,
      };
    }

    let existPhone = await userSchema.findOne({
      where: {
        phone: bodyData?.phone,
      },
    });

    if (existPhone) {
      return {
        status: STATUS_CODES.ALREADY_REPORTED,
        message: STATUS_MESSAGES.EXISTS.PHONE,
      };
    }

    let existUsername = await userSchema.findOne({
      where: {
        username: bodyData?.username,
      },
    });

    if (existUsername) {
      return {
        status: STATUS_CODES.ALREADY_REPORTED,
        message: STATUS_MESSAGES.EXISTS.USERNAME,
      };
    }

    let newPassword = await bcrypt.hash(bodyData?.password, 10);

    await userSchema.create({ ...bodyData, password: newPassword });

    return { status: STATUS_CODES.SUCCESS };
  }

  // Sign In
  async signIn(bodyData) {
    let currentTime = new Date();

    var checkUser;
    if (bodyData?.type === "email") {
      checkUser = await userSchema.findOne({
        where: {
          email: bodyData?.email,
          status: "active",
          is_delete: false,
        },
      });

      if (!checkUser) {
        return {
          status: STATUS_CODES.NOT_FOUND,
          message: STATUS_MESSAGES.NOT_FOUND.EMAIL,
        };
      }
    } else if (bodyData?.type === "username") {
      checkUser = await userSchema.findOne({
        where: {
          username: bodyData?.username,
          status: "active",
          is_delete: false,
        },
      });

      if (!checkUser) {
        return {
          status: STATUS_CODES.NOT_FOUND,
          message: STATUS_MESSAGES.NOT_FOUND.USER,
        };
      }
    } else {
      checkUser = await userSchema.findOne({
        where: {
          phone: bodyData?.phone,
          status: "active",
          is_delete: false,
        },
      });

      if (!checkUser) {
        return {
          status: STATUS_CODES.NOT_FOUND,
          message: STATUS_MESSAGES.NOT_FOUND.PHONE,
        };
      }
    }

    let match = await bcrypt.compare(bodyData.password, checkUser?.password);

    if (!match) {
      return {
        status: STATUS_CODES.NOT_VALID_DATA,
      };
    }

    let access_token = await jwt.sign(
      { id: checkUser?.id },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );

    await userTokenSchema.create({
      access_token,
      user_id: checkUser?.id,
    });

    await userSchema.update(
      { last_login: currentTime },
      {
        where: {
          id: checkUser?.id,
        },
      }
    );

    return {
      status: STATUS_CODES.SUCCESS,
    };
  }

  // Get profile
  async getProfile(userInfo) {
    return await userSchema.findOne({
      where: {
        id: userInfo?.id,
      },
    });
  }

  async update(userInfo, bodyData){
    let response = await userSchema.update(bodyData, {
      where: {
        id: userInfo?.id
      }
    });

    return {
      status: STATUS_CODES.SUCCESS
    }
  }
}

module.exports = userModel;
