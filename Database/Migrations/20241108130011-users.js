"use strict";
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
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      role: {
        allowNull: false,
        type: Sequelize.BIGINT(20),
      },
      profile: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      license_number: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      license_expiry: {
        allowNull: false,
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
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING(20),
      },
      alternate_phone_code: {
        allowNull: false,
        type: Sequelize.STRING(20),
      },
      alternate_phone: {
        allowNull: false,
        type: Sequelize.STRING(20),
      },
      postal_code: {
        allowNull: false,
        type: Sequelize.STRING(20),
      },
      city: {
        allowNull: false,
        type: Sequelize.BIGINT(20),
      },
      state: {
        allowNull: false,
        type: Sequelize.BIGINT(20),
      },
      country: {
        allowNull: false,
        type: Sequelize.BIGINT(20),
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
