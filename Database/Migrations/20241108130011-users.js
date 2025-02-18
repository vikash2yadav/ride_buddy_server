"use strict";

const { ROLES } = require('../../Config/constant');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(20).UNSIGNED,
      },
      firstname: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      lastname: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      fullname: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      gender: {
        allowNull: false,
        type: Sequelize.ENUM("male", "female", "other"),
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      date_of_birth: {
        allowNull: true,
        type: Sequelize.DATEONLY,
      },
      role_id: {
        allowNull: false,
        type: Sequelize.BIGINT(20).UNSIGNED,
        references: { model: "roles", key: "id" },
        defaultValue: ROLES.CUSTOMER
      },
      profile: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      license_number: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      license_expiry: {
        allowNull: true,
        type: Sequelize.DATEONLY,
      },
      address: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      native_address: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      phone_code: {
        allowNull: false,
        type: Sequelize.STRING(20),
        defaultValue: '91'
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING(20),
      },
      alternate_phone: {
        allowNull: true,
        type: Sequelize.STRING(20),
      },
      postal_code: {
        allowNull: true,
        type: Sequelize.STRING(20),
      },
      city_id: {
        allowNull: true,
        type: Sequelize.BIGINT(20).UNSIGNED,
        references: { model: "cities", key: "id" },
      },
      state_id: {
        allowNull: true,
        type: Sequelize.BIGINT(20).UNSIGNED,
        references: { model: "states", key: "id" },
      },
      is_verified: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
      last_login: {
        allowNull: true,
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("users");
  },
};
