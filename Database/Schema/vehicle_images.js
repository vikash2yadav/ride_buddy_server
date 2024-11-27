'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vehicle_images extends Model {
    static associate(models) {
      vehicle_images.belongsTo(models.vehicles, {
        foreignKey: 'vehicle_id',
        onDelete: 'cascade'
      });
    }
  }
  vehicle_images.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(20).UNSIGNED,
    },
    vehicle_id: {
      allowNull: false,
      type: DataTypes.BIGINT(20).UNSIGNED,
      references: {
        model: "vehicles",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    image_url: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    image_type: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    is_primary: {
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
  }, {
    sequelize,
    modelName: 'vehicle_images',
  });
  return vehicle_images;
};