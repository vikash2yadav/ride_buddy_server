"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class permissions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  permissions.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT(20).UNSIGNED,
      },
      role_id: {
        allowNull: false,
        type: DataTypes.BIGINT(20).UNSIGNED,
      },
      module_id: {
        allowNull: false,
        type: DataTypes.BIGINT(20).UNSIGNED,
      },
      read_access: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      create_access: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      update_access: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      delete_access: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true,
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
      modelName: "permissions",
    }
  );
  return permissions;
};
