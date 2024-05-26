module.exports = (sequelize, Sequelize) => {
  const CreditCard = sequelize.define("CreditCard", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    number: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    ccv: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    expirationDate: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return CreditCard;
};
