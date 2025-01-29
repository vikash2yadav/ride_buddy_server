'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories", [
      {
        name: 'Xuv',
        vehicle_type: "Car", 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sedan',
        vehicle_type: "Car", 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Luxury',
        vehicle_type: "Car", 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Muv',
        vehicle_type: "Car", 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Road bike',
        vehicle_type: "Bike", 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mountain',
        vehicle_type: "Bike",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hybrid',
        vehicle_type: "Bike",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Folding',
        vehicle_type: "Bike",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'BMX',
        vehicle_type: "Bike",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Electric',
        vehicle_type: "Bike",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kick',
        vehicle_type: "Scooter",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Motor',
        vehicle_type: "Scooter",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Stunt',
        vehicle_type: "Scooter",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Folding',
        vehicle_type: "Scooter",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Racing',
        vehicle_type: "Scooter",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("categories", null, {});

  }
};
