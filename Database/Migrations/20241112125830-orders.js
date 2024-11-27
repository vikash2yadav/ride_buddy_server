"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(20).UNSIGNED,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.BIGINT(20).UNSIGNED,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      vehicle_id: {
        allowNull: false,
        type: Sequelize.BIGINT(20).UNSIGNED,
        references: {
          model: "vehicles",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      order_detail_id: {
        allowNull: false,
        type: Sequelize.BIGINT(20).UNSIGNED,
        references: {model: 'orderDetails', key: 'id'}
      },
      rental_start: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      rental_end: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      total_amount: {
        allowNull: false,
        type: Sequelize.DECIMAL(20, 2),
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM("active", "completed", "cancelled", "pending"),
        defaultValue: "active",
      },
      payment_status: {
        allowNull: false,
        type: Sequelize.ENUM("pending", "completed", "failed", "refunded"),
        defaultValue: "pending",
      },
      payment_method: {
        allowNull: false,
        type: Sequelize.ENUM(
          "Credit Card",
          "Debit Card",
          "PayPal",
          "Cash",
          "Bank Transfer"
        ),
      },
      transaction_id: {
        allowNull: true,
        type: Sequelize.STRING(255),
        unique: true,
      },
      discount: {
        allowNull: true,
        type: Sequelize.DECIMAL(5, 2),
        defaultValue: 0,
      },
      rental_duration_days: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      promo_code: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },
      extra_charges: {
        allowNull: true,
        type: Sequelize.DECIMAL(20, 2),
        defaultValue: 0,
      },
      delivery_option: {
        allowNull: true,
        type: Sequelize.ENUM("delivery", "pickup"),
        defaultValue: "pickup",
      },
      delivery_address: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      pickup_location: {
        allowNull: true,
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("orders");
  },
};
