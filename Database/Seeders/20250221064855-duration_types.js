"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("duration_types", [
      {
        name: "For Per Hour",
        status: "active",
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "For Per Day",
        status: "active",
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "For Per Week",
        status: "active",
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "For Per Month",
        status: "active",
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("duration_types", null, {});
  },
};
