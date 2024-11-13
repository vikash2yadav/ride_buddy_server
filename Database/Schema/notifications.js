'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class notifications extends Model {
    static associate(models) {
      // define association here
    }
  }
  notifications.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(20).UNSIGNED,
    },
    user_id: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      allowNull: false,
      references: {
        model: "users",
        key: "user_id",
      },
    },
    message: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    notification_type: {
      allowNull: false,
      type: DataTypes.ENUM("bookings", "payments"),
    },
    sent_time: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM("unread", "read", "archived"),
      defaultValue: "unread",
    },
    is_delete: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'notifications',
  });
  return notifications;
};