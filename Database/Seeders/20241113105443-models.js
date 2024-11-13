"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("modells", [
      { name: "Corolla", brand_id: 1 },
      { name: "Camry", brand_id: 1 },
      { name: "Hilux", brand_id: 1 },
      { name: "Fortuner", brand_id: 1 },
      { name: "Land Cruiser", brand_id: 1 },

      // Models for Harley-Davidson (brand_id: 2)
      { name: "Street 750", brand_id: 2 },
      { name: "Iron 883", brand_id: 2 },
      { name: "Sportster S", brand_id: 2 },
      { name: "Fat Boy", brand_id: 2 },
      { name: "Road King", brand_id: 2 },

      // Models for Yamaha (brand_id: 3)
      { name: "YZF-R1", brand_id: 3 },
      { name: "MT-09", brand_id: 3 },
      { name: "FZ-07", brand_id: 3 },
      { name: "VMAX", brand_id: 3 },
      { name: "FZ-09", brand_id: 3 },

      // Models for Ducati (brand_id: 4)
      { name: "Panigale V4", brand_id: 4 },
      { name: "Monster", brand_id: 4 },
      { name: "Scrambler", brand_id: 4 },
      { name: "Diavel", brand_id: 4 },
      { name: "Multistrada V4", brand_id: 4 },

      // Models for BMW (brand_id: 5)
      { name: "BMW X5", brand_id: 5 },
      { name: "BMW 3 Series", brand_id: 5 },
      { name: "BMW M5", brand_id: 5 },
      { name: "BMW Z4", brand_id: 5 },
      { name: "BMW 7 Series", brand_id: 5 },

      // Models for Honda (brand_id: 6)
      { name: "Civic", brand_id: 6 },
      { name: "Accord", brand_id: 6 },
      { name: "CR-V", brand_id: 6 },
      { name: "Pilot", brand_id: 6 },
      { name: "CBR600RR", brand_id: 6 },

      { name: "Mustang", brand_id: 7 },
      { name: "F-150", brand_id: 7 },
      { name: "Explorer", brand_id: 7 },
      { name: "Focus", brand_id: 7 },
      { name: "Ranger", brand_id: 7 },

      // Suzuki (brand_id: 8)
      { name: "Swift", brand_id: 8 },
      { name: "Vitara", brand_id: 8 },
      { name: "Baleno", brand_id: 8 },
      { name: "Alto", brand_id: 8 },
      { name: "SX4", brand_id: 8 },

      // Kawasaki (brand_id: 9)
      { name: "Ninja 650", brand_id: 9 },
      { name: "Z900", brand_id: 9 },
      { name: "Versys 650", brand_id: 9 },
      { name: "KLR 650", brand_id: 9 },
      { name: "Vulcan S", brand_id: 9 },

      // Mercedes-Benz (brand_id: 10)
      { name: "A-Class", brand_id: 10 },
      { name: "C-Class", brand_id: 10 },
      { name: "S-Class", brand_id: 10 },
      { name: "E-Class", brand_id: 10 },
      { name: "GLA", brand_id: 10 },

      // Nissan (brand_id: 11)
      { name: "Altima", brand_id: 11 },
      { name: "Maxima", brand_id: 11 },
      { name: "Leaf", brand_id: 11 },
      { name: "X-Trail", brand_id: 11 },
      { name: "Navara", brand_id: 11 },

      // Harley-Davidson (brand_id: 12)
      { name: "Street 750", brand_id: 12 },
      { name: "Iron 883", brand_id: 12 },
      { name: "Sportster S", brand_id: 12 },
      { name: "Fat Boy", brand_id: 12 },
      { name: "Road King", brand_id: 12 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("modells", null, {});
  },
};
