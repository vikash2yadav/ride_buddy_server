"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class otps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      otps.belongsTo(models.users, {
        foreignKey: "user_id",
        onDelete: "cascade",
      });
    }
  }
  otps.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT(20).UNSIGNED,
      },
      otp: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      user_id: {
        allowNull: false,
        type: DataTypes.BIGINT(20).UNSIGNED,
        references: {
          model: "users",
          key: "id",
        },
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
      modelName: "otps",
    }
  );
  return otps;
};
