'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      payments.belongsTo(models.bookings, {
        foreignKey: 'booking_id',
        onDelete: 'cascade'
      });
    }
  }
  payments.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(20).UNSIGNED,
    },
    booking_id: {
      allowNull: false,
      type: DataTypes.BIGINT(20).UNSIGNED,
    },
    payment_amount: {
      allowNull: false,
      type: DataTypes.DECIMAL(20, 2),
    },
    payment_method: {
      allowNull: false,
      type: DataTypes.ENUM("credit_card", "debit_card", "paypal", "cash"),
    },
    payment_status: {
      type: DataTypes.ENUM("pending", "completed", "failed", "refunded"),
      allowNull: false,
      defaultValue: "pending",
    },
    payment_date: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    transaction_id: {
      allowNull: true,
      type: DataTypes.STRING(255),
      unique: true,
    },
    payment_gateway: {
      allowNull: true,
      type: DataTypes.STRING(255),
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
    modelName: 'payments',
  });
  return payments;
};