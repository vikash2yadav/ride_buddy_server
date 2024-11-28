"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("features", [
      {
        vehicle_id: 1,
        feature_type_id: 1,
        title: "Rear AC Vents",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_id: 1,
        feature_type_id: 1,
        title: "Lane Change Indicator",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_id: 1,
        feature_type_id: 2,
        title: "Lane Change Indicator",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_id: 1,
        feature_type_id: 2,
        title: "Power Steering",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_id: 1,
        feature_type_id: 2,
        title: "image Adjustable Steering",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_id: 1,
        feature_type_id: 2,
        title: "Air Conditioner",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("features", null, {});
  },
};
