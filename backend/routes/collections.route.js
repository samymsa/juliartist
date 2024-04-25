const express = require("express");
const router = express.Router();
const { checkJwt } = require("../middlewares/jwt.middleware");
const collectionsController = require("../controllers/collections.controller");

router.get("", checkJwt, collectionsController.getCollections);

module.exports = router;
