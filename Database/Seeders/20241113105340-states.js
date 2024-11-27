"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("states", [
      { name: "Andhra Pradesh", createdAt: new Date(), updatedAt: new Date() },
      {
        name: "Arunachal Pradesh",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: "Assam", createdAt: new Date(), updatedAt: new Date() },
      { name: "Bihar", createdAt: new Date(), updatedAt: new Date() },
      { name: "Chhattisgarh", createdAt: new Date(), updatedAt: new Date() },
      { name: "Goa", createdAt: new Date(), updatedAt: new Date() },
      { name: "Gujarat", createdAt: new Date(), updatedAt: new Date() },
      { name: "Haryana", createdAt: new Date(), updatedAt: new Date() },
      {
        name: "Himachal Pradesh",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: "Jharkhand", createdAt: new Date(), updatedAt: new Date() },
      { name: "Karnataka", createdAt: new Date(), updatedAt: new Date() },
      { name: "Kerala", createdAt: new Date(), updatedAt: new Date() },
      { name: "Madhya Pradesh", createdAt: new Date(), updatedAt: new Date() },
      { name: "Maharashtra", createdAt: new Date(), updatedAt: new Date() },
      { name: "Manipur", createdAt: new Date(), updatedAt: new Date() },
      { name: "Meghalaya", createdAt: new Date(), updatedAt: new Date() },
      { name: "Mizoram", createdAt: new Date(), updatedAt: new Date() },
      { name: "Nagaland", createdAt: new Date(), updatedAt: new Date() },
      { name: "Odisha", createdAt: new Date(), updatedAt: new Date() },
      { name: "Punjab", createdAt: new Date(), updatedAt: new Date() },
      { name: "Rajasthan", createdAt: new Date(), updatedAt: new Date() },
      { name: "Sikkim", createdAt: new Date(), updatedAt: new Date() },
      { name: "Tamil Nadu", createdAt: new Date(), updatedAt: new Date() },
      { name: "Telangana", createdAt: new Date(), updatedAt: new Date() },
      { name: "Uttar Pradesh", createdAt: new Date(), updatedAt: new Date() },
      { name: "Uttarakhand", createdAt: new Date(), updatedAt: new Date() },
      { name: "West Bengal", createdAt: new Date(), updatedAt: new Date() },
      {
        name: "Andaman and Nicobar Islands",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: "Chandigarh", createdAt: new Date(), updatedAt: new Date() },
      {
        name: "Dadra and Nagar Haveli and Daman and Diu",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: "Lakshadweep", createdAt: new Date(), updatedAt: new Date() },
      { name: "Delhi", createdAt: new Date(), updatedAt: new Date() },
      { name: "Puducherry", createdAt: new Date(), updatedAt: new Date() },
      { name: "Ladakh", createdAt: new Date(), updatedAt: new Date() },
      { name: "Jammu & Kashmir", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("states", null, {});
  },
};
