const express = require("express");
const router = express.Router();
const collectionsController = require("../controllers/collections.controller");

router.get("", collectionsController.getCollections);

module.exports = router;
