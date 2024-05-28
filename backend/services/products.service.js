const { Sequelize, products } = require("../models");

function getProducts({ title, collection }) {
  return products.findAll({
    where: {
      ...(title && {
        title: {
          [Sequelize.Op.like]: `%${title.toLowerCase()}%`,
        },
      }),
      ...(collection && { collection }),
    },
  });
}

function getCollections() {
  return products.findAll({
    attributes: [
      [Sequelize.fn("DISTINCT", Sequelize.col("collection")), "collection"],
    ],
  });
}

module.exports = {
  getProducts,
  getCollections,
};
