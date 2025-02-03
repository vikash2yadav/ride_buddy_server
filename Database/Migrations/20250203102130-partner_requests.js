"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("partner_requests", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(20).UNSIGNED,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      dealership: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      dealership_city_id: {
        allowNull: false,
        type: Sequelize.BIGINT(20).UNSIGNED,
        references: { model: "cities", key: "id" },
      },
      comment: {
        allowNull: true,
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("partner_requests");
  },
};
