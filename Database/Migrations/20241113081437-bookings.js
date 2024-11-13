"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("bookings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(20).UNSIGNED,
      },
      user_id: {
        type: Sequelize.BIGINT(20).UNSIGNED,
        allowNull: false,
        references: {
          model: "users",
          key: "user_id",
        },
      },
      vehicle_id: {
        type: Sequelize.BIGINT(20).UNSIGNED,
        allowNull: false,
        references: {
          model: "vehicles",
          key: "vehicle_id",
        },
      },
      pickup_time: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      return_time: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      pickup_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      return_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      pickup_location: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      dropoff_location: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      total_amount: {
        type: Sequelize.DECIMAL(20, 2),
        allowNull: false,
      },
      payment_method: {
        type: Sequelize.ENUM("credit_card", "debit_card", "paypal", "cash"),
        allowNull: false,
      },
      payment_status: {
        type: Sequelize.ENUM("pending", "completed", "failed", "refunded"),
        allowNull: false,
        defaultValue: "pending",
      },
      status: {
        type: Sequelize.ENUM("pending", "confirmed", "cancelled", "overdue"),
        allowNull: false,
        defaultValue: "pending",
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
    await queryInterface.dropTable("bookings");
  },
};
