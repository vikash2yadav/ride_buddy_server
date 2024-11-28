'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vehicles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      vehicles.belongsTo(models.brands, {
        foreignKey: "brand_id",
        onDelete: 'cascade'
      });
      vehicles.belongsTo(models.modells, {
        foreignKey: "model_id",
        onDelete: 'cascade'
      });
      vehicles.belongsTo(models.users, {
        foreignKey: "owner_id",
        onDelete: 'cascade'
      });
      vehicles.belongsTo(models.users, {
        foreignKey: "added_by",
        as: 'addedBy',
        onDelete: 'cascade'
      });
      vehicles.hasMany(models.orders, {
        foreignKey: 'vehicle_id',
        onDelete: 'cascade'
      });
      vehicles.hasMany(models.reviews, {
        foreignKey: 'vehicle_id',
        onDelete: 'cascade'
      });
      vehicles.hasMany(models.vehicle_images, {
        foreignKey: 'vehicle_id',
        onDelete: 'cascade'
      });
      vehicles.hasMany(models.bookings, {
        foreignKey: 'vehicle_id',
        onDelete: 'cascade'
      });
      vehicles.hasMany(models.favourites, {
        foreignKey: 'vehicle_id',
        onDelete: 'cascade'
      });
      vehicles.hasMany(models.specifications, {
        foreignKey: 'vehicle_id',
        onDelete: 'cascade'
      });
      vehicles.hasMany(models.features, {
        foreignKey: 'vehicle_id',
        onDelete: 'cascade'
      });
    }
  }
  vehicles.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(20).UNSIGNED,
    },
    vehicle_type: {
      allowNull: false,
      type: DataTypes.ENUM("Car", "Bike", "Scooter"),
    },
    fuel_type: {
      allowNull: false,
      type: DataTypes.ENUM("Petrol", "Diesel", "Electric", "Hybrid", "Gas"),
    },
    brand_id: {
      allowNull: false,
      type: DataTypes.BIGINT(20).UNSIGNED,
      references: {model: 'brands', key: 'id'}
    },
    model_id: {
      allowNull: false,
      type: DataTypes.BIGINT(20).UNSIGNED,
      references: {model: 'modells', key: 'id'}
    },
    year: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    registration_number: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    vin_number: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    color: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    engine_capacity: {
      allowNull: false,
      type: DataTypes.INTEGER,
      comment: "value in CC",
    },
    is_available_per_hour: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    price_per_hour: {
      allowNull: true,
      type: DataTypes.DECIMAL(20, 2),
    },
    is_available_per_day: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    price_per_day: {
      allowNull: true,
      type: DataTypes.DECIMAL(20, 2),
    },
    is_available_per_week: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    price_per_week: {
      allowNull: true,
      type: DataTypes.DECIMAL(20, 2),
    },
    is_available_per_month: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    price_per_month: {
      allowNull: true,
      type: DataTypes.DECIMAL(20, 2),
    },
    insurance_type: {
      allowNull: false,
      type: DataTypes.ENUM(
        "CDW", // Collision Damage Waiver
        "TP", // Theft Protection
        "LI", // Liability Insurance
        "PAI", // Personal Accident Insurance
        "Roadside Assistance", // Roadside Assistance
        "Comprehensive", // Comprehensive Coverage
        "PEC", // Personal Effects Coverage
        "ELP", // Extended Liability Protection
        "Excess Reduction", // Excess Reduction Insurance
        "None" // No Insurance
      ),
      defaultValue: "CDW", // Default value, for example
    },
    insurance_provider: {
      allowNull: true,
      type: DataTypes.STRING(255),
    },
    insurance_policy_number: {
      allowNull: true,
      type: DataTypes.STRING(255),
    },
    insurance_price: {
      allowNull: false,
      type: DataTypes.DECIMAL(20, 2),
    },
    deposit_amount: {
      allowNull: false,
      type: DataTypes.DECIMAL(20, 2),
    },
    availability_status: {
      allowNull: false,
      type: DataTypes.ENUM(
        "Available",
        "Rented",
        "Under Maintenance",
        "Reserved"
      ),
      defaultValue: 'Available'
    },
    availability_start_date: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    availability_end_date: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    location: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    mileage: {
      allowNull: false,
      type: DataTypes.DECIMAL(10, 2),
    },
    mileage_limit_per_day: {
      allowNull: false,
      type: DataTypes.DECIMAL(10, 2),
    },
    last_service_date: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    next_service_date: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    service_history: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    damage_report: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    condition_status: {
      allowNull: false,
      type: DataTypes.ENUM("New", "Good", "Fair", "Poor"),
      defaultValue: "Fair",
    },
    seats: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    km_driven: {
      allowNull: false,
      type: DataTypes.BIGINT(10),
    },
    rto: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    ownership: {
      allowNull: false,
      type: DataTypes.ENUM("First", "Second", "Third", "Forth", "Fifth", "Other"),
    },
    transmission: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    owner_id: {
      allowNull: false,
      type: DataTypes.BIGINT(20).UNSIGNED,
      references: {model: 'users', key: 'id'}
    },
    added_by: {
      allowNull: false,
      type: DataTypes.BIGINT(20).UNSIGNED,
      references: {model: 'users', key: 'id'}
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
  }, {
    sequelize,
    modelName: 'vehicles',
  });
  return vehicles;
};