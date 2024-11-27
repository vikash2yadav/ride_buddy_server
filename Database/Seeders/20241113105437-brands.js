"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("brands", [
      {
        name: "Toyota",
        logo_url: "toyota.jpeg",
        country_of_origin: "Japan",
        founded_year: 1937,
        description:
          "Toyota is known for its durable and fuel-efficient cars, including models like the Corolla and Camry.",
        website_url: "https://www.toyota.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Harley-Davidson",
        logo_url: "harley.png",
        country_of_origin: "United States",
        founded_year: 1903,
        description:
          "Harley-Davidson is an iconic American motorcycle manufacturer, known for its heavyweight motorcycles.",
        website_url: "https://www.harley-davidson.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Yamaha",
        logo_url: "yamaha.jpeg",
        country_of_origin: "Japan",
        founded_year: 1953,
        description:
          "Yamaha is a leading motorcycle manufacturer known for its performance motorcycles and cruisers.",
        website_url: "https://www.yamaha-motor.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ducati",
        logo_url: "ducati.jpeg",
        country_of_origin: "Italy",
        founded_year: 1926,
        description:
          "Ducati is known for its high-performance motorcycles, particularly sport bikes like the Panigale.",
        website_url: "https://www.ducati.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "BMW",
        logo_url: "bmw.jpeg",
        country_of_origin: "Germany",
        founded_year: 1916,
        description:
          "BMW is known for luxury vehicles and sporty driving dynamics, including the 3 Series and X5.",
        website_url: "https://www.bmw.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Honda",
        logo_url: "honda.jpeg",
        country_of_origin: "Japan",
        founded_year: 1946,
        description:
          "Honda is a global leader in the production of automobiles and motorcycles, known for models like Civic and Accord.",
        website_url: "https://www.honda.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ford",
        logo_url: "ford.jpeg",
        country_of_origin: "United States",
        founded_year: 1903,
        description:
          "Ford is an American multinational automaker, known for vehicles like the Mustang and F-150.",
        website_url: "https://www.ford.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Suzuki",
        logo_url: "maruti.jpeg",
        country_of_origin: "Japan",
        founded_year: 1909,
        description:
          "Suzuki is a Japanese automaker known for its affordable cars, motorcycles, and all-terrain vehicles.",
        website_url: "https://www.suzuki.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kawasaki",
        logo_url: "kawasaki.png",
        country_of_origin: "Japan",
        founded_year: 1896,
        description:
          "Kawasaki is renowned for manufacturing motorcycles, including high-performance models like the Ninja.",
        website_url: "https://www.kawasaki.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mercedes-Benz",
        logo_url: "mercedes_benz.jpg",
        country_of_origin: "Germany",
        founded_year: 1926,
        description:
          "Mercedes-Benz is known for its luxury vehicles, including the S-Class and C-Class.",
        website_url: "https://www.mercedes-benz.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nissan",
        logo_url: "nissan.jpeg",
        country_of_origin: "Japan",
        founded_year: 1933,
        description:
          "Nissan produces a wide range of vehicles, including sedans, SUVs, and electric cars like the Nissan Leaf.",
        website_url: "https://www.nissan-global.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "TATA Motors",
        logo_url: "tata.png",
        country_of_origin: "India",
        founded_year: 1945,
        description:
          "TATA Motors is an iconic Indian Motors manufacturer, known for its heavyweight Motors.",
        website_url: "https://www.tatamotors.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hyundai",
        logo_url: "hyundai.jpeg",
        country_of_origin: "South Korea",
        founded_year: 1967,
        description:
          "Hyundai is a major South Korean automaker known for producing affordable and reliable vehicles.",
        website_url: "https://www.hyundai.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Skoda",
        logo_url: "skoda.jpeg",
        country_of_origin: "Czech Republic",
        founded_year: 1895,
        description:
          "Skoda is a well-established Czech automaker known for its practical and reliable vehicles.",
        website_url: "https://www.skoda-auto.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mahindra",
        logo_url: "mahindra.jpeg",
        country_of_origin: "India",
        founded_year: 1945,
        description:
          "Mahindra is an Indian multinational corporation that manufactures cars, tractors, and commercial vehicles.",
        website_url: "https://www.mahindra.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MG (Morris Garages)",
        logo_url: "mg.png",
        country_of_origin: "United Kingdom",
        founded_year: 1924,
        description:
          "MG is a British automotive marque known for its iconic sports cars and more recently, electric vehicles.",
        website_url: "https://www.mg.co.uk",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kia",
        logo_url: "kia.png",
        country_of_origin: "South Korea",
        founded_year: 1944,
        description:
          "Kia is a South Korean automaker known for its innovative and affordable cars, such as the Kia Soul and Optima.",
        website_url: "https://www.kia.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("brands", null, {});
  },
};
