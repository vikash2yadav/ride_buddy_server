"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("partner_requests", [
      {
        name: "Rohit Sharma",
        dealership: "Kanak Mototrs",
        phone: "8747322393",
        email: "rohit@mailinator.com",
        dealership_city_id: "1",
        comment: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("partner_requests", null, {});
  },
};
