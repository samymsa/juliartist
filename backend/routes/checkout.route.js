const express = require("express");
const router = express.Router();
const checkoutController = require("../controllers/checkout.controller");
const { checkJwt } = require("../middlewares/jwt.middleware");

router.post("", checkJwt, checkoutController.checkout);

module.exports = router;
