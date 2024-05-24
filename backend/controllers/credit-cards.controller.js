const creditCardsService = require("../services/credit-cards.service");

function getCreditCards(req, res) {
  const creditCards = creditCardsService.getCreditCards(req.query);
  res.send(creditCards);
}

function addCreditCard(req, res) {
  const creditCard = creditCardsService.addCreditCard(req.body);
  res.send(creditCard);
}

function deleteCreditCard(req, res) {
  const creditCard = creditCardsService.deleteCreditCard(req.params.id);
  if (!creditCard) {
    return res.status(404).send("Credit card not found");
  }
  res.send(creditCard);
}

module.exports = {
  getCreditCards,
  addCreditCard,
  deleteCreditCard,
};
