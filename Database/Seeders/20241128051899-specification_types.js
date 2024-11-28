"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("specification_types", [
      {
        name: "Basic",
        status: true,
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Engine & Transmission",
        status: true,
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fuel & Performance",
        status: true,
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Suspension, Steering & Brakes",
        status: true,
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dimensions & Capacity",
        status: true,
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("specification_types", null, {});
  },
};
