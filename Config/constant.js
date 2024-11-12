//GLOBAL STATUS
exports.STATUS_CODES = {
  CONTINUE: 100,
  SWITCHING_PROTOCOLS: 101,
  PROCESSING: 102,
  EARLY_HINTS: 103,

  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NON_AUTHORITATIVE_INFORMATION: 203,
  NO_CONTENT: 204,
  RESET_CONTENT: 205,
  PARTIAL_CONTENT: 206,
  MULTI_STATUS: 207,
  ALREADY_REPORTED: 208,
  IM_USED: 226,

  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  VALIDATION_ERROR: 422,
  NOT_VALID_DATA: 422,

  SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
};

exports.STATUS_MESSAGES = {
  SERVER_ERROR: "Internal server error! Please try again.",
  VERIFICATION_EMAIL_SENT:
    "We have sent you an verification email to your account",
  EMAIL_VERIFIED: "Your account has been verified successfully.",
  EMAIL_VERIFIED_ALREADY: "Your account is already verified.",
  REGISTER_SUCCESS: "You have successfully signed up.",
  LOGIN_SUCCESS: "You have successfully logged in.",
  OTP_SUCCESS: "Otp sent successfully.",
  OTP_MATCHED: "Otp matched successfully.",
  IMAGE_SUCCESS: "Your image has been successfully saved.",
  IMAGE_REMOVED: "Your image has been successfully removed.",
  RESET_PASSWORD_ALREADY:
    "You already have reset the password with this token.",

  EXISTS: {
    USER: "User already exist!",
    EMAIL: "Email is already registered!",
    PHONE: "Phone number is already exist!",
    USERNAME: "Username is already exist!",
    ROLE: "Role is already exist!",
  },
  NOT_FOUND: {
    ID: "Id is not available in our system!",
    USER: "Your email address is not available in our system!",
    EMAIL: "This email is not available in our system!",
    PHONE: "Phone number is not available in our system!",
    TOKEN: "Token not found!",
    USERNAME: "Username not found!",
    ROLE: "Role not found!",
  },
  PASSWORD: {
    MISMATCH: "Provided password do not match",
    TOO_SIMPLE: "Please create more complicated password",
    INCORRECT: "Password incorrect",
    NOT_SAME: "Password and confirm password are not same",
    CHANGED: "Password has been changed successfully",
    CURRENT_PASSWORD_MISMATCH: "Current password does not match.",
  },
  PROCESS: {
    EMAIL_SENT: "We have sent email to your account",
    EMAIL_SENT_ACCOUNT: "We have sent email to %s",
  },
  CONTACT_US_PROCESS: {
    EMAIL_SENT: "Your email has been sent successfully",
  },
  ROLE: {
    ADDED: "Role added successfully!",
    UPDATED: "Role updated successfully!",
    DELETED: "Role deleted successfully!",
  },
  TOKEN: {
    SENT: "We have sent reset token to your registered email",
    INVALID: "Your token is not valid.",
    EXPIRED: "Your token has been expired.",
    LOGOUT: "You have been successfully logged out.",
  },
  ADMIN: {
    ADDED: "Admin has been added successfully.",
    DELETED: "Admin has been deleted successfully.",
    UPDATED: "Admin has been updated successfully.",
  },
  DATA: {
    ADD: "Data has been added successfully",
  },
  USER: {
    REGISTERED: "User registered successfully",
    LOGIN: "User Login successfully",
    DELETED: "User has been deleted successfully.",
    UPDATED: "User has been updated successfully.",
    NOW_ACTIVE: "Your Account is now Active",
    NOW_INACTIVE: "Your Account is now Inactive",
    ADDED: "User has been added successfully.",
    PROFILE_UPDATED: "Your profile has been updated successfully.",
    PROFILE_IMAGE_UPDATED: "Your profile image has been updated successfully.",
    PROFILE_DELETED: "Your profile has been deleted successfully.",
    NOT_VERIFIED: "Your email address is not verified.",
    INACTIVE: "Your email address is not active.",
    INVALID: "Please enter valid email & password.",
  },
  VALIDATION: {
    REQUIRED: {
      PASSWORD: "Please enter password.",
      CONFIRM_PASSWORD: "Please enter confirm password.",
      FIRST_NAME: "Please enter first name.",
    },
    LENGTH: {
      USERNAME_MIN: "Username must be minimum of 4 character long.",
      USERNAME_MAX: "Username must be maximum of 16 character long.",
      PASSWORD: "Password must be minimum of 8 character long.",
    },
  },
};

// Role
exports.ROLES = {
  SUPER_ADMIN: 1,
  ADMIN: 2,
  RIDESHARE: 3,
  CUSTOMER: 4,
};

// Generic Status
exports.STATUS = {
  NOTDELETED: false,
  INACTIVE: "inactive",
  ACTIVE: "active",
  AVAILABLE: 1,
  NOT_AVAILABLE: 0,
  NOT_WORKING: 0,
  ASSIGNED: 3,
  DELETED: true,
  APPROVE: 3,
  REJECTED: 4,
  COMPLETED: 5,
  DEFAULT: 1,
  NOT_DEFAULT: 0,
  TRUE: true,
  FALSE: false,
  YES: 1,
  NO: 0,
  VERIFIED: 1,
  NOT_VERIFIED: 0,
};
