"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("specifications", [
      {
        vehicle_id: 1,
        specification_type_id: 1,
        key: "Engine",
        value: "190",
        ext: "cc",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_id: 1,
        specification_type_id: 2,
        key: "Power",
        value: "81.83",
        ext: "bhp",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_id: 1,
        specification_type_id: 1,
        key: "Transmission",
        value: "Manual",
        ext: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_id: 1,
        specification_type_id: 1,
        key: "Mileage",
        value: "18.6",
        ext: "kmpl",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_id: 1,
        specification_type_id: 1,
        key: "Fuel",
        value: "Petrol",
        ext: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_id: 1,
        specification_type_id: 1,
        key: "Length",
        value: "3985",
        ext: "mm",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("specifications", null, {});
  },
};
