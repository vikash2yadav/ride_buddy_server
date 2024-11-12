'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class brands extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      brands.hasMany(models.vehicles, {
        foreignKey: "brand_id",
        onDelete: 'cascade'
      });
      brands.hasMany(models.modells, {
        foreignKey: 'brand_id',
        onDelete: 'cascade'
      });
    }
  }
  brands.init({
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
    logo_url: {
      allowNull: true,
      type: DataTypes.STRING(255),
    },
    country_of_origin: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    founded_year: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    description: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    website_url: {
      allowNull: true,
      type: DataTypes.STRING(255),
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
  }, {
    sequelize,
    modelName: 'brands',
  });
  return brands;
};