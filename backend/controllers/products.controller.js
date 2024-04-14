const productsService = require("../services/products.service");

function getAll(req, res) {
  res.send(productsService.getAll());
}

module.exports = {
  getAll,
};
