"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("vehicle_durations", [
      {
        vehicle_id: 1,
        duration_type_id: 1,
        duration_value_id: 2,
        date: new Date(),
        status: "active",
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_id: 1,
        duration_type_id: 2,
        duration_value_id: null,
        date: new Date(),
        status: "active",
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_id: 1,
        duration_type_id: 3,
        duration_value_id: null,
        date: new Date(),
        status: "active",
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("vehicle_durations", null, {});
  },
};
