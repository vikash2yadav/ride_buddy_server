"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("bookings", [
      {
        user_id: 4,
        vehicle_id: 1, // Assuming vehicle with id 1 exists
        pickup_time: new Date('2024-11-20T10:00:00'),
        return_time: new Date('2024-11-22T10:00:00'),
        pickup_date: new Date('2024-11-20'),
        return_date: new Date('2024-11-22'),
        pickup_location: 'Hyderabad, Telangana',
        dropoff_location: 'Bangalore, Karnataka',
        total_amount: 5000.00, // Example total amount
        payment_method: 'credit_card',
        payment_status: 'pending',
        status: 'confirmed',
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4, // Assuming user with id 2 exists
        vehicle_id: 2, // Assuming vehicle with id 2 exists
        pickup_time: new Date('2024-11-25T09:00:00'),
        return_time: new Date('2024-11-28T09:00:00'),
        pickup_date: new Date('2024-11-25'),
        return_date: new Date('2024-11-28'),
        pickup_location: 'Mumbai, Maharashtra',
        dropoff_location: 'Goa, India',
        total_amount: 7500.00, // Example total amount
        payment_method: 'paypal',
        payment_status: 'completed',
        status: 'confirmed',
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("bookings", null, {});
  },
};
