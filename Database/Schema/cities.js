"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      cities.hasMany(models.users, {
        foreignKey: "city_id",
        onDelete: "cascade",
      });
      cities.belongsTo(models.states, {
        foreignKey: "state_id",
        onDelete: "cascade",
      });
    }
  }
  cities.init(
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
      state_id: {
        allowNull: false,
        type: DataTypes.BIGINT(20).UNSIGNED,
        references: { model: "states", key: "id" },
      },
      status: {
        allowNull: false,
        type: DataTypes.ENUM("active", "inactive"),
        defaultValue: "active",
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
      modelName: "cities",
    }
  );
  return cities;
};
