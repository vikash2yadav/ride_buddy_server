"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("feature_types", [
      {
        name: "Basic",
        status: true,
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Comfort & Convenience",
        status: true,
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Interior",
        status: true,
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Exterior",
        status: true,
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Safety",
        status: true,
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Entertainment & Communication",
        status: true,
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("feature_types", null, {});
  },
};
