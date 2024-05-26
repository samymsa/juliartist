const creditCardsService = require("../services/credit-cards.service");
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const jwt = require("jsonwebtoken");

function getUserInfoFromToken(req) {
  const token = req.headers.authorization.split(" ")[1];
  return jwt.verify(token, ACCESS_TOKEN_SECRET);
}

function getCreditCards(req, res) {
  const userId = getUserInfoFromToken(req).id;
  creditCardsService
    .getCreditCards(userId)
    .then((creditCards) => res.send(creditCards))
    .catch((err) => res.status(500).send("Error: " + err));
}

function addCreditCard(req, res) {
  const creditCard = req.body;
  const userId = getUserInfoFromToken(req).id;
  creditCard.UserId = userId;
  creditCardsService
    .addCreditCard(creditCard)
    .then((newCreditCard) => res.send(newCreditCard))
    .catch((err) => res.status(400).send("Error: " + err));
}

function deleteCreditCard(req, res) {
  const userId = getUserInfoFromToken(req).id;
  const creditCardNumber = req.params.id;

  creditCardsService.getCreditCardByNumber(creditCardNumber).then((creditCard) => {
    console.log(creditCard);
    if (!creditCard || creditCard.UserId !== userId) {
      return res.status(401).send({
        error: "Unauthorized",
      });
    }

    creditCardsService
      .deleteCreditCard(creditCardNumber)
      .then(() => res.sendStatus(204))
      .catch((err) => res.status(500).send("Error: " + err));
  });
}

module.exports = {
  getCreditCards,
  addCreditCard,
  deleteCreditCard,
};
