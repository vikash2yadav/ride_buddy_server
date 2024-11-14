"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("orders", [
      {
        user_id: 4, // Assuming user with id 1 exists
        vehicle_id: 1, // Assuming vehicle with id 1 exists
        order_detail_id: 1, // Assuming order detail with id 1 exists
        rental_start: new Date("2024-11-20T10:00:00"),
        rental_end: new Date("2024-11-22T10:00:00"),
        total_amount: 6000.0,
        status: "active",
        payment_status: "pending",
        payment_method: "Credit Card",
        transaction_id: "txn12345678",
        discount: 5.0,
        rental_duration_days: 2,
        promo_code: "DISCOUNT10",
        extra_charges: 0,
        delivery_option: "pickup",
        delivery_address: null,
        pickup_location: "Hyderabad, Telangana",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4, // Assuming user with id 2 exists
        vehicle_id: 2, // Assuming vehicle with id 2 exists
        order_detail_id: 2, // Assuming order detail with id 2 exists
        rental_start: new Date("2024-11-25T09:00:00"),
        rental_end: new Date("2024-11-28T09:00:00"),
        total_amount: 8500.0,
        status: "pending",
        payment_status: "completed",
        payment_method: "PayPal",
        transaction_id: "txn87654321",
        discount: 10.0,
        rental_duration_days: 3,
        promo_code: "HOLIDAY15",
        extra_charges: 0,
        delivery_option: "delivery",
        delivery_address: "Mumbai, Maharashtra, 400001",
        pickup_location: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("orders", null, {});
  },
};
