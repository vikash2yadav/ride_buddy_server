'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      orders.belongsTo(models.users, {
        foreignKey: 'user_id',
        onDelete: 'cascade'
      });
      orders.belongsTo(models.vehicles, {
        foreignKey: 'vehicle_id',
        onDelete: 'cascade'
      });
      orders.belongsTo(models.orderDetails, {
        foreignKey: 'order_detail_id',
        onDelete: 'cascade'
      });
    }
  }
  orders.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(20).UNSIGNED,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.BIGINT(20).UNSIGNED,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    vehicle_id: {
      allowNull: false,
      type: DataTypes.BIGINT(20).UNSIGNED,
      references: {
        model: "vehicles",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    order_detail_id: {
      allowNull: false,
      type: DataTypes.BIGINT(20).UNSIGNED,
      references: {model: 'orderDetails', key: 'id'}
    },
    rental_start: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    rental_end: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    total_amount: {
      allowNull: false,
      type: DataTypes.DECIMAL(20, 2),
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM("active", "completed", "cancelled", "pending"),
      defaultValue: "active",
    },
    payment_status: {
      allowNull: false,
      type: DataTypes.ENUM("pending", "completed", "failed", "refunded"),
      defaultValue: "pending",
    },
    payment_method: {
      allowNull: false,
      type: DataTypes.ENUM(
        "Credit Card",
        "Debit Card",
        "PayPal",
        "Cash",
        "Bank Transfer"
      ),
    },
    transaction_id: {
      allowNull: true,
      type: DataTypes.STRING(255),
      unique: true,
    },
    discount: {
      allowNull: true,
      type: DataTypes.DECIMAL(5, 2),
      defaultValue: 0,
    },
    rental_duration_days: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    promo_code: {
      allowNull: true,
      type: DataTypes.STRING(50),
    },
    extra_charges: {
      allowNull: true,
      type: DataTypes.DECIMAL(20, 2),
      defaultValue: 0,
    },
    delivery_option: {
      allowNull: true,
      type: DataTypes.ENUM("delivery", "pickup"),
      defaultValue: "pickup",
    },
    delivery_address: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    pickup_location: {
      allowNull: true,
      type: DataTypes.TEXT,
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
    modelName: 'orders',
  });
  return orders;
};