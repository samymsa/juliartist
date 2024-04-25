const products = require("../assets/mocks/products.json");

function getProducts({ title, collection }) {
  return products.filter((product) => {
    return (
      (!title || product.title.toLowerCase().includes(title.toLowerCase())) &&
      (!collection || product.collection === collection)
    );
  });
}

module.exports = {
  getProducts,
};
