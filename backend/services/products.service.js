const products = require("../assets/mocks/products.json");

function getAll() {
  return products;
}

module.exports = {
  getAll,
};
