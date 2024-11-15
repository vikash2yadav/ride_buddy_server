"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("favourites", [
      {
        user_id: 4,
        vehicle_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        vehicle_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        vehicle_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        vehicle_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        vehicle_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("favourites", null, {});
  },
};
