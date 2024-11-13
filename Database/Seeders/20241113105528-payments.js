"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("payments", [
      {
        booking_id: 1, // Assuming booking with id 1 exists
        payment_amount: 6000.00,
        payment_method: 'credit_card',
        payment_status: 'completed',
        payment_date: new Date('2024-11-20T12:00:00'),
        transaction_id: 'txn00123456',
        payment_gateway: 'Stripe',
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        booking_id: 2, // Assuming booking with id 2 exists
        payment_amount: 8500.00,
        payment_method: 'paypal',
        payment_status: 'completed',
        payment_date: new Date('2024-11-25T10:00:00'),
        transaction_id: 'txn00234567',
        payment_gateway: 'PayPal',
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        booking_id: 3, // Assuming booking with id 3 exists
        payment_amount: 15000.00,
        payment_method: 'debit_card',
        payment_status: 'pending',
        payment_date: new Date('2024-12-01T13:00:00'),
        transaction_id: 'txn00345678',
        payment_gateway: 'Razorpay',
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        booking_id: 4, // Assuming booking with id 4 exists
        payment_amount: 12000.00,
        payment_method: 'cash',
        payment_status: 'failed',
        payment_date: new Date('2024-12-10T09:00:00'),
        transaction_id: 'txn00456789',
        payment_gateway: 'N/A',
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("payments", null, {});
  },
};
