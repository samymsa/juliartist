module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("Product", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    collection: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    image: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  });

  return Product;
};
