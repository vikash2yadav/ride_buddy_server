'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert("orderDetails", [
    {
      customer_name: 'John Doe',
      customer_notes: 'Please ensure the vehicle is cleaned before delivery.',
      vehicle_type: 'Car',
      registration_number: 'ABC1234',
      fuel_type: 'Petrol',
      brand: 'Toyota',
      model: 'Corolla',
      color: 'Red',
      engine_capacity: 1800,  // Engine capacity in CC
      total_hours: '5',  // Total hours for the service
      total_days: '1',  // Total days for the service
      hour_rate: 50.00,  // Hourly rate
      day_rate: 200.00,  // Daily rate
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      customer_name: 'Jane Smith',
      customer_notes: 'Ensure to check the oil level and tire pressure.',
      vehicle_type: 'Bike',
      registration_number: 'XYZ5678',
      fuel_type: 'Diesel',
      brand: 'Harley-Davidson',
      model: 'Iron 883',
      color: 'Black',
      engine_capacity: 883,  // Engine capacity in CC
      total_hours: '3',  // Total hours for the service
      total_days: '0',  // Total days for the service (same-day service)
      hour_rate: 75.00,  // Hourly rate
      day_rate: 0.00,  // No day rate as it's a same-day service
      createdAt: new Date(),
      updatedAt: new Date(),
    },
   ])
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("orderDetails", null, {});
  }
};
