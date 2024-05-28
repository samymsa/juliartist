"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const https = require("https");
    const products = require("../assets/mocks/products.json");

    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const fetchAsBase64 = async (url) => {
      return new Promise((resolve) => {
        https.get(url, (res) => {
          let data = "data:" + res.headers["content-type"] + ";base64,";
          res.setEncoding("base64");
          res.on("data", (chunk) => {
            data += chunk;
          });
          res.on("end", () => {
            resolve(data);
          });
        });
      });
    };

    const fetchProducts = async () => {
      const productsSequelize = [];
      for (let product of products) {
        const image = await fetchAsBase64(product.displayUrl);
        productsSequelize.push({
          title: product.caption.split("\n")[0],
          collection: capitalizeFirstLetter(product.hashtags[1]),
          price: 29.99,
          image,
        });
      }
      return productsSequelize;
    };

    const productsSequelize = await fetchProducts();
    return queryInterface.bulkInsert("Products", productsSequelize, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
