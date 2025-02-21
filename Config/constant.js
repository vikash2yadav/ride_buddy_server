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
    ORDER: "Order is already placed!",
    REVIEW: "Review is already added!",
    BRAND: "Brand is already registered!",
    MODEL: "Model is already registered!",
    VEHICLE: "Vehicle is already registered!",
    MODULE: "Module is already exist!",
    PROMO_CODE: "Promo code is already exist!",
  },
  NOT_FOUND: {
    ID: "Id is not available in our system!",
    USER: "Your email address is not available in our system!",
    EMAIL: "This email is not available in our system!",
    PHONE: "Phone number is not available in our system!",
    TOKEN: "Token not found!",
    USERNAME: "Username not found!",
    ROLE: "Role not found!",
    ORDER: "Order not fount!",
    REVIEW: "Review not found!",
    BOOKING: "Booking not found!",
    PAYMENT: "Payment not found!",
    NOTIFICATION: "Notification not found!",
    BRAND: "Brand not found!",
    MODEL: "Model not found!",
    VEHICLE: "Vehicle not found!",
    MODULE: "Module not found!",
    PROMO_CODE: "Promo code not found!",
    FAVOURITE: "Favourite not found!",
    PERMISSION: "Sorry, We can`t found permission, please try again!.",
    CITY: "City not found!",
    PARTNER_REQUEST: 'Partner request not found!',
    STATE: "State not found!",
    DURATION_TYPE: "Duration Type not found!",
    DURATION_VALUE: "Duration Value not found!"
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
    LOGOUT: "User Logout successfully",
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
  ORDER: {
    ADDED: "Order added successfully!",
    UPDATED: "Order updated successfully!",
    DELETED: "Order deleted successfully!",
    CANCELLED: "Order is cancelled, now you can`t change order details.",
    COMPLETED: "Order is completed, now you can`t change order details.",
  },
  REVIEW: {
    ADDED: "Review added successfully!",
    UPDATED: "Review updated successfully!",
    DELETED: "Review deleted successfully!",
  },
  BOOKING: {
    ADDED: "Booking added successfully!",
    UPDATED: "Booking updated successfully!",
    DELETED: "Booking deleted successfully!",
  },
  PAYMENT: {
    ADDED: "Payment added successfully!",
    UPDATED: "Payment updated successfully!",
    DELETED: "Payment deleted successfully!",
  },
  NOTIFICATION: {
    ADDED: "Notification added successfully!",
    UPDATED: "Notification updated successfully!",
    DELETED: "Notification deleted successfully!",
  },
  BRAND: {
    ADDED: "Brand added successfully!",
    UPDATED: "Brand updated successfully!",
    DELETED: "Brand deleted successfully!",
  },
  MODEL: {
    ADDED: "Model added successfully!",
    UPDATED: "Model updated successfully!",
    DELETED: "Model deleted successfully!",
  },
  VEHICLE: {
    ADDED: "Vehicle registered!",
    UPDATED: "Vehicle`s data updated!",
    DELETED: "Vehicle deleted from our system!",
  },
  MODULE: {
    ADDED: "Module added!",
    UPDATED: "Module updated!",
    DELETED: "Module deleted!",
  },
  PROMO_CODE: {
    ADDED: "Promo code added!",
    UPDATED: "Promo code updated!",
    DELETED: "Promo code deleted!",
  },
  FAVOURITE: {
    ADDED: "Added to favourites!",
    UPDATED: "Updated to favourites!",
    DELETED: "Deleted to favourites!",
  },
  CITY: {
    ADDED: "City Added!",
    UPDATED: "City Updated!",
    DELETED: "City Deleted!",
  },
  STATE: {
    ADDED: "State Added!",
    UPDATED: "State Updated!",
    DELETED: "State Deleted!",
  },
  PARTNER_REQUEST: {
    ADDED: "Added to partner request!",
    UPDATED: "Updated to partner request!",
    DELETED: "Deleted to partner request!",
  },
  DURATION_TYPE: {
    ADDED: "Duration Type Added Successfully!",
    UPDATED: "Duration Type Updated Successfully!",
    DELETED: "Duration Type Deleted Successfully!",
  },
  DURATION_VALUE: {
    ADDED: "Duration Value Added Successfully!",
    UPDATED: "Duration Value Updated Successfully!",
    DELETED: "Duration Value Deleted Successfully!",
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
  PENDING: "pending",
  CANCELLED: "cancelled",
  COMPLETED: "completed",
  REJECTED: "rejected",
  APPROVED: "approved",
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

// Module
exports.MODULES = {
  ROLES: 1,
  USERS: 2,
  BRANDS: 3,
  MODELS: 4,
  VEHICLES: 5,
  BOOKINGS: 6,
  ORDERS: 7,
  PAYMENTS: 8,
  MODULES: 9,
  FAVOURITES: 10,
  PROMO_CODE: 11,
  REVIEWS: 12,
  CITY: 13,
  PARTNER_REQUEST: 14,
  STATE: 15,
  DURATION_TYPE: 16,
  DURATION_VALUE: 17
};

exports.ACCESS_TYPES = {
  READ: "read_access",
  CREATE: "create_access",
  UPDATE: "update_access",
  DELETE: "delete_access",
};

exports.IMAGE_PATHS = {
  BRAND: process.env.FRONTEND_IMAGE_PATH + "brands/",
  LOCATION: process.env.FRONTEND_IMAGE_PATH + "locations/",
  VEHICLE: process.env.FRONTEND_IMAGE_PATH + "vehicles/",
  USER: process.env.FRONTEND_IMAGE_PATH + "users/",
};
