"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Products", [
      {
        title: "Mérida",
        collection: "Disney",
        price: 29.99,
      },
      {
        title: "Blanche Neige",
        collection: "Disney",
        price: 29.99,
      },
      {
        title: "Mirabel Madrigal",
        collection: "Disney",
        price: 29.99,
      },
      {
        title: "Raiponce",
        collection: "Disney",
        price: 29.99,
      },
      {
        title: "Peter Pan & Wendy",
        collection: "Disney",
        price: 29.99,
      },
      {
        title: "Jack Sparrow",
        collection: "Disney",
        price: 29.99,
      },
      {
        title: "Totoro",
        collection: "Studio Ghibli",
        price: 29.99,
      },
      {
        title: "Studio Ghibli",
        collection: "Studio Ghibli",
        price: 29.99,
      },
      {
        title: "Bloom",
        collection: "Winx Club",
        price: 29.99,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
