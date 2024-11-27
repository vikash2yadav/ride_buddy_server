"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_tokens extends Model {
    static associate(models) {
      user_tokens.belongsTo(models.users, {
        foreignKey: 'user_id',
        onDelete: 'cascade'
      });
    }
  }
  user_tokens.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT(20).UNSIGNED,
      },
      access_token: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      user_id: {
        allowNull: false,
        type: DataTypes.BIGINT(20),
        references: { model: "users", key: "id" },
      },
      expires_in: {
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
      modelName: "user_tokens",
    }
  );
  return user_tokens;
};
