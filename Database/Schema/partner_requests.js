"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class partner_requests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      partner_requests.belongsTo(models.cities, {
        foreignKey: "dealership_city_id",
        onDelete: "cascade",
      });
    }
  }
  partner_requests.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT(20).UNSIGNED,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      dealership: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      phone: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      dealership_city_id: {
        allowNull: false,
        type: DataTypes.BIGINT(20).UNSIGNED,
        references: { model: "cities", key: "id" },
      },
      comment: {
        allowNull: true,
        type: DataTypes.TEXT,
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
      modelName: "partner_requests",
    }
  );
  return partner_requests;
};
