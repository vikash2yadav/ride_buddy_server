'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      reviews.belongsTo(models.users, {
        foreignKey: 'user_id',
        onDelete: 'cascade'
      });
      reviews.belongsTo(models.vehicles, {
        foreignKey: 'vehicle_id',
        onDelete: 'cascade'
      });
    }
  }
  reviews.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(20).UNSIGNED
    },
    user_id: {
      allowNull: false,
      type: DataTypes.BIGINT(20).UNSIGNED,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
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
    rating: {
      allowNull: false,
      type: DataTypes.STRING(10)
    },
    review_text: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    helpful_count: {
      allowNull: true,
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    response: {
      allowNull: true,
      type: DataTypes.TEXT
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM('pending', 'approved', 'rejected'),
      defaultValue: "pending",
    },
    is_delete: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'reviews',
  });
  return reviews;
};