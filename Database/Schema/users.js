"use strict";
const { Model } = require("sequelize");
const { ROLES, IMAGE_PATHS } = require("../../Config/constant");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users.hasMany(models.user_tokens, {
        foreignKey: "user_id",
        onDelete: "cascade",
      });
      users.hasMany(models.otps, {
        foreignKey: "user_id",
        onDelete: "cascade",
      });
      users.belongsTo(models.roles, {
        foreignKey: "role_id",
        onDelete: "cascade",
      });
      users.belongsTo(models.cities, {
        foreignKey: "city_id",
        onDelete: "cascade",
      });
      users.belongsTo(models.states, {
        foreignKey: "state_id",
        onDelete: "cascade",
      });
      users.hasMany(models.vehicles, {
        foreignKey: "owner_id",
        onDelete: "cascade",
      });
      users.hasMany(models.vehicles, {
        foreignKey: "added_by",
        as: "addedBy",
        onDelete: "cascade",
      });
      users.hasMany(models.reviews, {
        foreignKey: "user_id",
        onDelete: "cascade",
      });
      users.hasMany(models.bookings, {
        foreignKey: "user_id",
        onDelete: "cascade",
      });
      users.hasMany(models.orders, {
        foreignKey: "user_id",
        onDelete: "cascade",
      });
      users.hasMany(models.notifications, {
        foreignKey: "user_id",
        onDelete: "cascade",
      });
      users.hasMany(models.promo_codes, {
        foreignKey: "created_by",
        onDelete: "cascade",
      });
      users.hasMany(models.favourites, {
        foreignKey: "user_id",
        onDelete: "cascade",
      });
    }
  }
  users.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT(20).UNSIGNED,
      },
      firstname: {
        allowNull: false,
        type: DataTypes.STRING(100),
        set(val) {
          this.setDataValue(
            "firstname",
            val
              .trim()
              .toLowerCase()
              .replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase())
          );
          this.setDataValue(
            "fullname",
            `${this.getDataValue("firstname") || ""} ${
              this.getDataValue("lastname") || ""
            }`
          );
        },
      },
      lastname: {
        allowNull: false,
        type: DataTypes.STRING(100),
        set(val) {
          this.setDataValue(
            "lastname",
            val
              .trim()
              .toLowerCase()
              .replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase())
          );
          this.setDataValue(
            "fullname",
            `${this.getDataValue("firstname") || ""} ${
              this.getDataValue("lastname") || ""
            }`
          );
        },
      },
      fullname: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      gender: {
        allowNull: false,
        type: DataTypes.ENUM("male", "female", "other"),
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      date_of_birth: {
        allowNull: true,
        type: DataTypes.DATEONLY,
      },
      role_id: {
        allowNull: false,
        type: DataTypes.BIGINT(20).UNSIGNED,
        references: { model: "roles", key: "id" },
        defaultValue: ROLES.CUSTOMER,
      },
      profile: {
        allowNull: true,
        type: DataTypes.TEXT,
        get() {
          return this.getDataValue("profile")
            ? IMAGE_PATHS.USER +
                "/" +
                this.getDataValue("profile")
            : null;
        },
      },
      license_number: {
        allowNull: true,
        type: DataTypes.STRING(255),
      },
      license_expiry: {
        allowNull: true,
        type: DataTypes.DATEONLY,
      },
      address: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      native_address: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      phone_code: {
        allowNull: false,
        type: DataTypes.STRING(20),
        defaultValue: "91",
      },
      phone: {
        allowNull: false,
        type: DataTypes.STRING(20),
      },
      alternate_phone: {
        allowNull: true,
        type: DataTypes.STRING(20),
      },
      postal_code: {
        allowNull: true,
        type: DataTypes.STRING(20),
      },
      city_id: {
        allowNull: true,
        type: DataTypes.BIGINT(20).UNSIGNED,
        references: { model: "cities", key: "id" },
      },
      state_id: {
        allowNull: true,
        type: DataTypes.BIGINT(20).UNSIGNED,
        references: { model: "states", key: "id" },
      },
      is_verified: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      status: {
        allowNull: false,
        type: DataTypes.ENUM("active", "inactive"),
        defaultValue: "active",
      },
      is_delete: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      last_login: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
