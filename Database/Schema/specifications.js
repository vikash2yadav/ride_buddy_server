"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class specifications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      specifications.belongsTo(models.vehicles, {
        foreignKey: "vehicle_id",
        onDelete: "cascade",
      });
      specifications.belongsTo(models.specification_types, {
        foreignKey: "specification_type_id",
        onDelete: "cascade",
      });
    }
  }
  specifications.init(
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
      specification_type_id: {
        allowNull: false,
        type: DataTypes.BIGINT(20).UNSIGNED,
        references: { model: "specification_types", key: "id" },
      },
      key: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      value: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      ext: {
        allowNull: true,
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
      modelName: "specifications",
    }
  );
  return specifications;
};
