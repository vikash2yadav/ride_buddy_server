"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("permissions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(20).UNSIGNED,
      },
      role_id: {
        allowNull: false,
        type: Sequelize.BIGINT(20).UNSIGNED,
        references: { model: "roles", key: "id" },
      },
      module_id: {
        allowNull: false,
        type: Sequelize.BIGINT(20).UNSIGNED,
        references: { model: "modules", key: "id" },
      },
      read_access: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      create_access: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      update_access: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      delete_access: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true,
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
    await queryInterface.dropTable("permissions");
  },
};
