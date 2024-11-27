"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("modells", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(20).UNSIGNED,
      },
      brand_id: {
        allowNull: false,
        type: Sequelize.BIGINT(20).UNSIGNED,
        references: {model: 'brands', key: 'id'}
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      year: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      engine_type: {
        allowNull: true,
        type: Sequelize.STRING(100),
        comment: "eg. V6, Inline-4",
      },
      fuel_type: {
        allowNull: true,
        type: Sequelize.ENUM("Petrol", "Diesel", "Electric", "Hybrid", "Gas"),
      },
      transmission: {
        allowNull: true,
        type: Sequelize.ENUM("Automatic", "Manual", "CVT", "Semi-Automatic"),
      },
      color_options: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("modells");
  },
};
