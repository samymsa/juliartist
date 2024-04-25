const productsService = require("../services/products.service");

function getProducts(req, res) {
  const products = productsService.getProducts(req.query);
  res.send(products);
}

module.exports = {
  getProducts,
};
