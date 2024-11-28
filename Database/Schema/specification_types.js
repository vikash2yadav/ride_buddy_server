"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class specification_types extends Model {
    static associate(models) {
      specification_types.hasMany(models.specifications, {
        foreignKey: "specification_type_id",
        onDelete: "cascade",
      });
    }
  }
  specification_types.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT(20).UNSIGNED,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(255),
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
      modelName: "specification_types",
    }
  );
  return specification_types;
};
