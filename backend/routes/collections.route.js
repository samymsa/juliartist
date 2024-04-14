const express = require("express");
const router = express.Router();
const { checkJwt } = require("../middlewares/jwt.middleware");
const collectionsController = require("../controllers/collections.controller");

router.get("", checkJwt, collectionsController.getAll);

module.exports = router;
