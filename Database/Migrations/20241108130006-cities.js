"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cities", {
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
      state_id: {
        allowNull: false,
        type: Sequelize.BIGINT(20).UNSIGNED,
        references: { model: "states", key: "id" },
      },
      imp:{
        allowNull: true,
        type: Sequelize.TINYINT(1),
        defaultValue: 0,
        comment: "0 => not important 1 => important"
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
    await queryInterface.dropTable("cities");
  },
};
