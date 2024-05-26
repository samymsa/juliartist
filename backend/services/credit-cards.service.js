const { creditCards } = require("../models");

function getCreditCards(userId) {
  return creditCards.findAll({
    where: {
      UserId: userId,
    },
  });
}

function getCreditCardByNumber(number) {
  return creditCards.findOne({
    where: {
      number,
    },
  });
}

function addCreditCard(creditCard) {
  return creditCards.create(creditCard);
}

function deleteCreditCard(number) {
  return creditCards.destroy({
    where: {
      number,
    },
  });
}

module.exports = {
  getCreditCards,
  getCreditCardByNumber,
  addCreditCard,
  deleteCreditCard,
};
