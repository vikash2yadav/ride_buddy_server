'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      orderDetails.hasMany(models.orders, {
        foreignKey: 'order_detail_id',
        onDelete: 'cascade'
      });
    }
  }
  orderDetails.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(20).UNSIGNED,
    },
    customer_name: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    customer_notes: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    vehicle_type: {
      allowNull: false,
      type: DataTypes.ENUM("Car", "Bike", "Scooter"),
    },
    registration_number: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    fuel_type: {
      allowNull: false,
      type: DataTypes.ENUM("Petrol", "Diesel", "Electric", "Hybrid", "Gas"),
    },
    brand: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    model: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    color: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    engine_capacity: {
      allowNull: false,
      type: DataTypes.INTEGER,
      comment: "value in CC",
    },
    total_hours: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    total_days: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    hour_rate: {
      allowNull: false,
      type: DataTypes.DECIMAL(20, 2),
    },
    day_rate: {
      allowNull: false,
      type: DataTypes.DECIMAL(20, 2),
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
    modelName: 'orderDetails',
  });
  return orderDetails;
};