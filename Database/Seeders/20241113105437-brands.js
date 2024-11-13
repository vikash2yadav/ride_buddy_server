"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("brands", [
      {
        name: "Toyota",
        logo_url:
          "https://upload.wikimedia.org/wikipedia/commons/9/91/Toyota_logo.png",
        country_of_origin: "Japan",
        founded_year: 1937,
        description:
          "Toyota is known for its durable and fuel-efficient cars, including models like the Corolla and Camry.",
        website_url: "https://www.toyota.com",
      },
      {
        name: "Harley-Davidson",
        logo_url:
          "https://upload.wikimedia.org/wikipedia/commons/c/c1/Harley-Davidson_logo.png",
        country_of_origin: "United States",
        founded_year: 1903,
        description:
          "Harley-Davidson is an iconic American motorcycle manufacturer, known for its heavyweight motorcycles.",
        website_url: "https://www.harley-davidson.com",
      },
      {
        name: "Yamaha",
        logo_url:
          "https://upload.wikimedia.org/wikipedia/commons/a/a1/Yamaha_logo.svg",
        country_of_origin: "Japan",
        founded_year: 1953,
        description:
          "Yamaha is a leading motorcycle manufacturer known for its performance motorcycles and cruisers.",
        website_url: "https://www.yamaha-motor.com",
      },
      {
        name: "Ducati",
        logo_url:
          "https://upload.wikimedia.org/wikipedia/commons/f/ff/Ducati_Logo_2018.svg",
        country_of_origin: "Italy",
        founded_year: 1926,
        description:
          "Ducati is known for its high-performance motorcycles, particularly sport bikes like the Panigale.",
        website_url: "https://www.ducati.com",
      },
      {
        name: "BMW",
        logo_url:
          "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW_logo_2020.svg",
        country_of_origin: "Germany",
        founded_year: 1916,
        description:
          "BMW is known for luxury vehicles and sporty driving dynamics, including the 3 Series and X5.",
        website_url: "https://www.bmw.com",
      },
      {
        name: "Honda",
        logo_url:
          "https://upload.wikimedia.org/wikipedia/commons/5/5b/Honda_logo_2023.svg",
        country_of_origin: "Japan",
        founded_year: 1946,
        description:
          "Honda is a global leader in the production of automobiles and motorcycles, known for models like Civic and Accord.",
        website_url: "https://www.honda.com",
      },
      {
        name: "Ford",
        logo_url:
          "https://upload.wikimedia.org/wikipedia/commons/1/1d/Ford_logo_2017.svg",
        country_of_origin: "United States",
        founded_year: 1903,
        description:
          "Ford is an American multinational automaker, known for vehicles like the Mustang and F-150.",
        website_url: "https://www.ford.com",
      },
      {
        name: "Suzuki",
        logo_url:
          "https://upload.wikimedia.org/wikipedia/commons/f/f5/Suzuki_logo_2019.svg",
        country_of_origin: "Japan",
        founded_year: 1909,
        description:
          "Suzuki is a Japanese automaker known for its affordable cars, motorcycles, and all-terrain vehicles.",
        website_url: "https://www.suzuki.com",
      },
      {
        name: "Kawasaki",
        logo_url:
          "https://upload.wikimedia.org/wikipedia/commons/4/45/Kawasaki_logo.svg",
        country_of_origin: "Japan",
        founded_year: 1896,
        description:
          "Kawasaki is renowned for manufacturing motorcycles, including high-performance models like the Ninja.",
        website_url: "https://www.kawasaki.com",
      },
      {
        name: "Mercedes-Benz",
        logo_url:
          "https://upload.wikimedia.org/wikipedia/commons/4/47/Mercedes-Benz_logo_2010.svg",
        country_of_origin: "Germany",
        founded_year: 1926,
        description:
          "Mercedes-Benz is known for its luxury vehicles, including the S-Class and C-Class.",
        website_url: "https://www.mercedes-benz.com",
      },
      {
        name: "Nissan",
        logo_url:
          "https://upload.wikimedia.org/wikipedia/commons/4/40/Nissan_logo_2013.svg",
        country_of_origin: "Japan",
        founded_year: 1933,
        description:
          "Nissan produces a wide range of vehicles, including sedans, SUVs, and electric cars like the Nissan Leaf.",
        website_url: "https://www.nissan-global.com",
      },
      {
        name: "Harley-Davidson",
        logo_url:
          "https://upload.wikimedia.org/wikipedia/commons/c/c1/Harley-Davidson_logo.png",
        country_of_origin: "United States",
        founded_year: 1903,
        description:
          "Harley-Davidson is an iconic American motorcycle manufacturer, known for its heavyweight motorcycles.",
        website_url: "https://www.harley-davidson.com",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("brands", null, {});
  },
};
