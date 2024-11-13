"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("orderDetails", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(20).UNSIGNED,
      },
      customer_name: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      customer_notes: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      vehicle_type: {
        allowNull: false,
        type: Sequelize.ENUM("Car", "Bike", "Scooter"),
      },
      registration_number: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      fuel_type: {
        allowNull: false,
        type: Sequelize.ENUM("Petrol", "Diesel", "Electric", "Hybrid", "Gas"),
      },
      brand: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      model: {
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
      total_hours: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      total_days: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      hour_rate: {
        allowNull: false,
        type: Sequelize.DECIMAL(20, 2),
      },
      day_rate: {
        allowNull: false,
        type: Sequelize.DECIMAL(20, 2),
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
    await queryInterface.dropTable("orderDetails");
  },
};
