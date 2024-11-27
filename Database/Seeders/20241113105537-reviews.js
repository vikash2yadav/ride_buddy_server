'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', [
      {
        user_id: 4, // Assuming user with id 1 exists
        vehicle_id: 2, // Assuming vehicle with id 2 exists
        rating: '4.5', // Rating as a string (can be any value between 1 and 5)
        review_text: 'The vehicle was in great condition and had a smooth ride. Highly recommended!',
        helpful_count: 0,
        response: 'Thank you for your feedback!',
        status: 'approved', // Review status (approved/pending/rejected)
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('reviews', null, {});
  }
};
