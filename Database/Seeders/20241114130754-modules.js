"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("modules", [
      {
        name: "Roles",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Users",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Brands",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Models",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Vehicles",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bookings",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Orders",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Payments",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Modules",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("modules", null, {});
  },
};
