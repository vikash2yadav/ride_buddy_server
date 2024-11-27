"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("promo_codes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(20).UNSIGNED,
      },
      code: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      discount_type: {
        allowNull: false,
        type: Sequelize.ENUM("Percentage", "Fixed"),
      },
      discount_value: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
      minimum_order_value: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
      maximum_order_value: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
      start_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      end_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      max_usage_limit: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      usage_count: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      user_limit: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      applicable_vehicle_type: {
        allowNull: true,
        type: Sequelize.ENUM("Car", "Bike", "Scooter", "All"),
        defaultValue: "All",
      },
      applicable_to: {
        allowNull: true,
        type: Sequelize.ENUM(
          "All Users",
          "New Users",
          "Returning Users",
          "Specific Users"
        ),
        defaultValue: "All Users",
      },
      terms_conditions: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      created_by: {
        allowNull: false,
        type: Sequelize.BIGINT(20).UNSIGNED,
        references: { model: "users", key: "id" },
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM("active", "inactive"),
        defaultValue: "active",
      },
      is_delete: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
    await queryInterface.dropTable("promo_codes");
  },
};
