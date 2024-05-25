const productsService = require("../services/products.service");

function getProducts(req, res) {
  productsService.getProducts(req.query).then((products) => {
    res.send(products);
  });
}

function getCollections(req, res) {
  productsService.getCollections().then((collections) => {
    res.send(collections.map((collection) => collection.toJSON().collection));
  });
}

module.exports = {
  getProducts,
  getCollections,
};
