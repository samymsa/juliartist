const productsService = require("../services/products.service");

function getProducts(req, res) {
  productsService.getProducts(req.query).then((products) => {
    res.send(products);
  });
}

module.exports = {
  getProducts,
};
