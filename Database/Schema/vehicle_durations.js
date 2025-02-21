"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class vehicle_durations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      vehicle_durations.belongsTo(models.vehicles, {
        foreignKey: "vehicle_id",
        onDelete: "cascade",
      });
      vehicle_durations.belongsTo(models.duration_types, {
        foreignKey: "duration_type_id",
        onDelete: "cascade",
      });
      vehicle_durations.belongsTo(models.duration_values, {
        foreignKey: "duration_value_id",
        onDelete: "cascade",
      });
    }
  }
  vehicle_durations.init(
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
      duration_type_id: {
        allowNull: false,
        type: DataTypes.BIGINT(20).UNSIGNED,
        references: { model: "duration_types", key: "id" },
      },
      duration_value_id: {
        allowNull: true,
        type: DataTypes.BIGINT(20).UNSIGNED,
        references: { model: "duration_values", key: "id" },
      },
      date: {
        allowNull: false,
        type: DataTypes.DATEONLY,
      },
      status: {
        allowNull: false,
        type: DataTypes.ENUM("active", "inactive", "booked"),
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
      modelName: "vehicle_durations",
    }
  );
  return vehicle_durations;
};
