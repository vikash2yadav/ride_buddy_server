"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("brands", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(20).UNSIGNED,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      logo_url: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      country_of_origin: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      founded_year: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      website_url: {
        allowNull: true,
        type: Sequelize.STRING(255),
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
    await queryInterface.dropTable("brands");
  },
};
