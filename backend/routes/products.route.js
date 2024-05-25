const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller");

router.get("", productsController.getProducts);
router.get("/collections", productsController.getCollections);

module.exports = router;
