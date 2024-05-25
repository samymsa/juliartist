const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const { checkJwt } = require("../middlewares/jwt.middleware");

router.post("/login", authController.login);
router.post("/register", authController.register);
router.put("/update", checkJwt, authController.update);

module.exports = router;
