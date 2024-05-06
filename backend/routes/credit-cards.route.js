const express = require("express");
const router = express.Router();
const { checkJwt } = require("../middlewares/jwt.middleware");
const creditCardsController = require("../controllers/credit-cards.controller");

router.get("", checkJwt, creditCardsController.getCreditCards);
router.post("", checkJwt, creditCardsController.addCreditCard);
router.delete("/:id", checkJwt, creditCardsController.deleteCreditCard);

module.exports = router;
