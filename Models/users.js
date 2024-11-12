const jwt = require("jsonwebtoken");
const { STATUS_CODES, STATUS_MESSAGES, STATUS } = require("../Config/constant");
const {
  users: userSchema,
  user_tokens: userTokenSchema,
  otps: otpSchema,
} = require("../Database/Schema");
const bcrypt = require("bcrypt");
const { generateOtp } = require("../Utils/helper");
const { response } = require("express");
const Mailer = new (require("../Utils/mailer"))();

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
        },
        attributes: [
          "id",
          "fullname",
          "username",
          "role_id",
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

  // update profile
  async update(userInfo, bodyData) {
    let response = await userSchema.update(bodyData, {
      where: {
        id: userInfo?.id,
      },
    });

    return {
      status: STATUS_CODES.SUCCESS,
    };
  }

  // delete account
  async deleteAccount(userInfo) {
    let response = await userSchema.update(
      { is_delete: STATUS.DELETED },
      {
        where: {
          id: userInfo?.id,
        },
      }
    );
    return {
      status: STATUS_CODES.SUCCESS,
    };
  }

  // status change
  async statusChange(userInfo, bodyData) {
    let { status } = bodyData;

    await userSchema.update(
      { status },
      {
        where: {
          id: userInfo?.id,
        },
      }
    );
    if (status === "active") {
      return {
        status: STATUS_CODES.SUCCESS,
        message: STATUS_MESSAGES.USER.NOW_ACTIVE,
      };
    } else {
      return {
        status: STATUS_CODES.SUCCESS,
        message: STATUS_MESSAGES.USER.NOW_INACTIVE,
      };
    }
  }

  // reset password
  async resetPassword(userInfo, bodyData) {
    const { current_password, password, confirm_password } = bodyData;

    if (password !== confirm_password) {
      return {
        status: STATUS_CODES.NOT_VALID_DATA,
        message: STATUS_MESSAGES.PASSWORD.NOT_SAME,
      };
    }

    let findUser = await userSchema.findOne({
      where: {
        id: userInfo?.id,
      },
    });

    let match = await bcrypt.compare(current_password, findUser?.password);

    if (!match) {
      return {
        status: STATUS_CODES.NOT_VALID_DATA,
        message: STATUS_MESSAGES.PASSWORD.CURRENT_PASSWORD_MISMATCH,
      };
    }

    let newPassword = await bcrypt.hash(password, 10);

    await userSchema.update(
      { password: newPassword },
      {
        where: {
          id: userInfo?.id,
        },
      }
    );

    return {
      status: STATUS_CODES.SUCCESS,
    };
  }

  // send otp to email
  async sendOtpToEmail(bodyData) {
    let findUser = await userSchema.findOne({
      where: {
        email: bodyData?.email,
        is_delete: false,
      },
    });

    if (!findUser) {
      return {
        status: STATUS_CODES.NOT_FOUND,
      };
    }

    const otp = generateOtp();
    let data = { email: findUser?.email, otp: otp, name: findUser?.firstname };

    await Mailer.forgotPasswordEmail(data);

    await otpSchema.create({
      otp: otp,
      user_id: findUser?.id,
    });

    return {
      status: STATUS_CODES.SUCCESS,
    };
  }

  // check otp
  async checkOtp(bodyData) {
    console.log(bodyData?.otp);
  }

  // change password
  async changePassword(bodyData) {
    const { new_password, confirm_new_password } = bodyData;

    if (new_password !== confirm_new_password) {
      return {
        status: STATUS_CODES.NOT_VALID_DATA,
      };
    }

    let hashedPassword = bcrypt.hash(new_password, 10);

    return await userSchema.update(
      { password: hashedPassword },
      {
        where: {},
      }
    );
  }

  // send token
  async sendToken(bodyData) {
    const { email } = bodyData;

    let findUser = await userSchema.findOne({
      where: {
        email,
      },
    });

    if (!findUser) {
      return {
        status: STATUS_CODES.NOT_FOUND,
      };
    }

    let access_token = jwt.sign({ email: email }, process.env.SECRET_KEY, {
      expiresIn: "5m",
    });

    await Mailer.forgotPasswordEmail({
      email,
      forgot_link: process.env.BACKEND_SERVER_LINK,
      access_token,
    });

    return await userTokenSchema.create({
      user_id: findUser?.id,
      access_token,
    });
  }

  // reset password by token
  async resetPasswordByToken(req) {
    const { password, confirm_password } = req?.body;
    const access_token = req?.header("user-reset-password");

    if (!access_token) {
      return {
        status: STATUS_CODES?.NOT_FOUND,
        message: STATUS_MESSAGES.NOT_FOUND.TOKEN,
      };
    }

    let response = await userTokenSchema.findOne({
      where: {
        access_token,
      },
    });

    if (!response) {
      return {
        status: STATUS_CODES.NOT_FOUND,
        message: STATUS_MESSAGES.TOKEN.INVALID,
      };
    }

    if (password !== confirm_password) {
      return {
        status: STATUS_CODES.NOT_VALID_DATA,
      };
    }

    let hashedPassword = await bcrypt.hash(password, 10);

    return await userSchema.update(
      { password: hashedPassword },
      {
        where: {
          id: response?.user_id,
        },
      }
    );
  }

  // find user by id
  async findUserByUsername(params) {
    const { username } = params;

    let findUser = await userSchema.findOne({
      where: {
        username,
        is_delete: false,
        status: STATUS.ACTIVE
      },
    });

    if (!findUser) {
      return {
        status: STATUS_CODES.NOT_FOUND,
      };
    }

    return findUser;
  }
}

module.exports = userModel;
