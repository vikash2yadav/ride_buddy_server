'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bookings extends Model {
    static associate(models) {
      bookings.belongsTo(models.users, {
        foreignKey: 'user_id',
        onDelete: 'cascade'
      });
      bookings.belongsTo(models.vahicles, {
        foreignKey: 'vehicle_id',
        onDelete: 'cascade'
      });
      bookings.hasMany(models.payments, {
        foreignKey: 'booking_id',
        onDelete: 'cascade'
      });
    }
  }
  bookings.init({
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
    vehicle_id: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      allowNull: false,
      references: {
        model: "vehicles",
        key: "vehicle_id",
      },
    },
    pickup_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    return_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    pickup_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    return_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    pickup_location: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    dropoff_location: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    total_amount: {
      type: DataTypes.DECIMAL(20, 2),
      allowNull: false,
    },
    payment_method: {
      type: DataTypes.ENUM("credit_card", "debit_card", "paypal", "cash"),
      allowNull: false,
    },
    payment_status: {
      type: DataTypes.ENUM("pending", "completed", "failed", "refunded"),
      allowNull: false,
      defaultValue: "pending",
    },
    status: {
      type: DataTypes.ENUM("pending", "confirmed", "cancelled", "overdue"),
      allowNull: false,
      defaultValue: "pending",
    },
    is_delete: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
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
    modelName: 'bookings',
  });
  return bookings;
};