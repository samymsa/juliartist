const express = require("express");
const router = express.Router();
const { checkJwt } = require("../middlewares/jwt.middleware");
const productsController = require("../controllers/products.controller");

router.get("", checkJwt, productsController.getAll);

module.exports = router;
