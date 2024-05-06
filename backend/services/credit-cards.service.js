const creditCards = require("../assets/mocks/credit-cards");

function getCreditCards(query) {
  const userId = parseInt(query?.userId);
  return creditCards.filter((creditCard) => creditCard.userId === userId);
}

function addCreditCard(creditCard) {
  const userId = parseInt(creditCard.userId);
  creditCard.userId = userId;
  creditCards.push(creditCard);
  return creditCard;
}

function deleteCreditCard(number) {
  const creditCardIndex = creditCards.findIndex(
    (creditCard) => creditCard.number === number
  );
  if (creditCardIndex === -1) {
    return null;
  }

  const creditCard = creditCards[creditCardIndex];
  creditCards.splice(creditCardIndex, 1);
  return creditCard;
}

module.exports = {
  getCreditCards,
  addCreditCard,
  deleteCreditCard,
};
