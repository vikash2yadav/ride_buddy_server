"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("payments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(20).UNSIGNED,
      },
      booking_id: {
        allowNull: false,
        type: Sequelize.BIGINT(20).UNSIGNED,
      },
      payment_amount: {
        allowNull: false,
        type: Sequelize.DECIMAL(20, 2),
      },
      payment_method: {
        allowNull: false,
        type: Sequelize.ENUM("credit_card", "debit_card", "paypal", "cash"),
      },
      payment_status: {
        type: Sequelize.ENUM("pending", "completed", "failed", "refunded"),
        allowNull: false,
        defaultValue: "pending",
      },
      payment_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      transaction_id: {
        allowNull: true,
        type: Sequelize.STRING(255),
        unique: true,
      },
      payment_gateway: {
        allowNull: true,
        type: Sequelize.STRING(255),
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
    await queryInterface.dropTable("payments");
  },
};
