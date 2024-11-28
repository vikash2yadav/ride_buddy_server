"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class features extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      features.belongsTo(models.feature_types, {
        foreignKey: "feature_type_id",
        onDelete: "cascade",
      });
      features.belongsTo(models.vehicles, {
        foreignKey: "vehicle_id",
        onDelete: "cascade",
      });
    }
  }
  features.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT(20).UNSIGNED,
      },
      vehicle_id: {
        allowNull: false,
        type: DataTypes.BIGINT(20).UNSIGNED,
        references: { model: "vehicles", key: "id" },
      },
      feature_type_id: {
        allowNull: false,
        type: DataTypes.BIGINT(20).UNSIGNED,
        references: { model: "feature_types", key: "id" },
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING(255),
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
      modelName: "features",
    }
  );
  return features;
};
