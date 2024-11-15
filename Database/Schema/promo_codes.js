"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class promo_codes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      promo_codes.belongsTo(models.users, {
        foreignKey: "created_by",
        onDelete: "cascade",
      });
    }
  }
  promo_codes.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT(20).UNSIGNED,
      },
      code: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      discount_type: {
        allowNull: false,
        type: DataTypes.ENUM("Percentage", "Fixed"),
      },
      discount_value: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 2),
      },
      minimum_order_value: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 2),
      },
      maximum_order_value: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 2),
      },
      start_date: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      end_date: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      max_usage_limit: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      usage_count: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      user_limit: {
        allowNull: true,
        type: DataTypes.INTEGER
      },
      applicable_vehicle_type: {
        allowNull: true,
        type: DataTypes.ENUM("Car", "Bike", "Scooter", "All"),
        defaultValue: "All",
      },
      applicable_to: {
        allowNull: true,
        type: DataTypes.ENUM(
          "All Users",
          "New Users",
          "Returning Users",
          "Specific Users"
        ),
        defaultValue: "All Users",
      },
      terms_conditions: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      created_by: {
        allowNull: false,
        type: DataTypes.BIGINT(20).UNSIGNED,
        references: { model: "users", key: "id" },
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
      modelName: "promo_codes",
    }
  );
  return promo_codes;
};
