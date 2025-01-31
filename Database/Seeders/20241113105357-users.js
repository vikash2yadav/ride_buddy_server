"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        firstname: "Vikash",
        lastname: "Yadav",
        fullname: "Vikash Yadav",
        email: "vikash@mailinator.com",
        password:
          "$2b$10$kmkkuzjQ2ZwM4WWzRNkokOj4dlUg4C7HIYyim6yELleqBjX9qFSQq", // 123
        username: "vikash123",
        date_of_birth: "2002-01-30",
        role_id: 1,
        profile: "profile_image.img",
        license_number: "GJ 27 2023 1234567",
        license_expiry: "2034-03-20",
        address: "2, Jainagar, Kalampur, Ahmedabad",
        native_address: "Amethi",
        phone_code: "91",
        phone: "8787878787",
        alternate_phone: "212321321",
        postal_code: 380026,
        gender: "male",
        city_id: 1,
        state_id: 1,
        is_verified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: "Amanda",
        lastname: "Scott",
        fullname: "Amanda Scott",
        email: "amanda@mailinator.com",
        password:
          "$2b$10$kmkkuzjQ2ZwM4WWzRNkokOj4dlUg4C7HIYyim6yELleqBjX9qFSQq", // 123
        username: "amanda123",
        date_of_birth: "2003-10-10",
        role_id: 2,
        profile: "profile_image.jpeg",
        license_number: "DL 07 2022 1234567",
        license_expiry: "2032-03-03",
        address: "23, G l coloni, new Delhi",
        native_address: "New Delhi",
        phone_code: "21",
        phone: "9823434323",
        alternate_phone: "9897544542",
        postal_code: 340000,
        gender: "female",
        city_id: 2,
        state_id: 1,
        is_verified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: "John",
        lastname: "Cena",
        fullname: "John Cena",
        email: "john@mailinator.com",
        password:
          "$2b$10$kmkkuzjQ2ZwM4WWzRNkokOj4dlUg4C7HIYyim6yELleqBjX9qFSQq", // 123
        username: "john123",
        date_of_birth: "2000-10-10",
        role_id: 3,
        profile: "profile_image.jpeg",
        license_number: "HR 01 2022 1234567",
        license_expiry: "2032-03-03",
        address: "213, new coloni, new Delhi",
        native_address: "New Delhi",
        phone_code: "11",
        phone: "9823439823",
        alternate_phone: "9897544542",
        postal_code: 290034,
        gender: "male",
        city_id: 3,
        state_id: 1,
        is_verified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: "Jane",
        lastname: "Smith",
        fullname: "John Smith",
        email: "smith@mailinator.com",
        password:
          "$2b$10$kmkkuzjQ2ZwM4WWzRNkokOj4dlUg4C7HIYyim6yELleqBjX9qFSQq", // 123
        username: "smith123",
        date_of_birth: "2001-11-20",
        role_id: 4,
        profile: "profile_image.jpeg",
        license_number: "PB 20 2022 1234567",
        license_expiry: "2034-03-03",
        address: "12, raman nagar, panjab",
        native_address: "Panjab",
        phone_code: "77",
        phone: "9823439223",
        alternate_phone: "9897544542",
        postal_code: 281034,
        gender: "male",
        city_id: 2,
        state_id: 2,
        is_verified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("users", null, {});
  },
};
