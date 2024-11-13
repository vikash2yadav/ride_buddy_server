"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class modells extends Model {
    static associate(models) {
      modells.hasMany(models.vehicles, {
        foreignKey: "model_id",
        onDelete: 'cascade'
      });
      modells.belongsTo(models.brands, {
        foreignKey: 'brand_id',
        onDelete: 'cascade'
      });
    }
  }
  modells.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT(20).UNSIGNED,
      },
      brand_id: {
        allowNull: false,
        type: DataTypes.BIGINT(20).UNSIGNED,
        references: { model: "brands", key: "id" },
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      year: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      engine_type: {
        allowNull: true,
        type: DataTypes.STRING(100),
        comment: "eg. V6, Inline-4",
      },
      fuel_type: {
        allowNull: true,
        type: DataTypes.ENUM("Petrol", "Diesel", "Electric", "Hybrid", "Gas"),
      },
      transmission: {
        allowNull: true,
        type: DataTypes.ENUM("Automatic", "Manual", "CVT", "Semi-Automatic"),
      },
      color_options: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: true,
        type: DataTypes.TEXT,
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
      modelName: "modells",
    }
  );
  return modells;
};
