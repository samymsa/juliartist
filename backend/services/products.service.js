// const products = require("../assets/mocks/products.json");
const { Sequelize, products } = require("../models");

async function getProducts({ title, collection }) {
  return await products.findAll({
    where: {
      ...(title && {
        title: {
          [Sequelize.Op.like]: `%${title}%`,
        },
      }),
      ...(collection && { collection }),
    },
  });
}

async function getCollections() {
  return await products.findAll({
    attributes: [
      [Sequelize.fn("DISTINCT", Sequelize.col("collection")), "collection"],
    ],
  });
}

module.exports = {
  getProducts,
  getCollections,
};
