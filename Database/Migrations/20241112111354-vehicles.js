"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("vehicles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(20).UNSIGNED,
      },
      vehicle_type: {
        allowNull: false,
        type: Sequelize.ENUM("Car", "Bike", "Scooter"),
      },
      fuel_type: {
        allowNull: false,
        type: Sequelize.ENUM("Petrol", "Diesel", "Electric", "Hybrid", "Gas"),
      },
      brand_id: {
        allowNull: false,
        type: Sequelize.BIGINT(20).UNSIGNED,
        references: {model: 'brands', key: 'id'}
      },
      model_id: {
        allowNull: false,
        type: Sequelize.BIGINT(20).UNSIGNED,
        references: {model: 'modells', key: 'id'}
      },
      year: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      registration_number: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      vin_number: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      color: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      engine_capacity: {
        allowNull: false,
        type: Sequelize.INTEGER,
        comment: "value in CC",
      },
      is_available_per_hour: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      price_per_hour: {
        allowNull: false,
        type: Sequelize.DECIMAL(20, 2),
      },
      is_available_per_day: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      price_per_day: {
        allowNull: false,
        type: Sequelize.DECIMAL(20, 2),
      },
      is_available_per_week: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      price_per_week: {
        allowNull: false,
        type: Sequelize.DECIMAL(20, 2),
      },
      is_available_per_month: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      price_per_month: {
        allowNull: false,
        type: Sequelize.DECIMAL(20, 2),
      },
      insurance_type: {
        allowNull: false,
        type: Sequelize.ENUM(
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
        type: Sequelize.STRING(255),
      },
      insurance_policy_number: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      insurance_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(20, 2),
      },
      deposit_amount: {
        allowNull: false,
        type: Sequelize.DECIMAL(20, 2),
      },
      availability_status: {
        allowNull: false,
        type: Sequelize.ENUM(
          "Available",
          "Rented",
          "Under Maintenance",
          "Reserved"
        ),
        defaultValue: 'Available'
      },
      availability_start_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      availability_end_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      location: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      mileage: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
      mileage_limit_per_day: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
      last_service_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      next_service_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      service_history: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      damage_report: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      condition_status: {
        allowNull: false,
        type: Sequelize.ENUM("New", "Good", "Fair", "Poor"),
        defaultValue: "Fair",
      },
      owner_id: {
        allowNull: false,
        type: Sequelize.BIGINT(20).UNSIGNED,
        references: {model: 'users', key: 'id'}
      },
      added_by: {
        allowNull: false,
        type: Sequelize.BIGINT(20).UNSIGNED,
        references: {model: 'users', key: 'id'}
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM("active", "inactive"),
        defaultValue: "active",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("vehicles");
  },
};
