"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("notifications", {
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
          key: "id",
        },
      },
      message: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      notification_type: {
        allowNull: false,
        type: Sequelize.ENUM("bookings", "payments"),
      },
      sent_time: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM("unread", "read", "archived"),
        defaultValue: "unread",
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
    await queryInterface.dropTable("notifications");
  },
};
