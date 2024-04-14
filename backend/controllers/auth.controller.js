const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const jwt = require("jsonwebtoken");
const usersService = require("../services/users.service");

function generateAccessToken(user) {
  return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: "365d" });
}

function login(req, res) {
  const user = req.body;

  console.log(user);

  if (!usersService.validateUser(user)) {
    return res.status(401).send({
      error: "Invalid email or password",
    });
  }

  const accessToken = generateAccessToken(user);

  res.setHeader("Authorization", `Bearer ${accessToken}`);
  res.send({
    user,
  });
}

function register(req, res) {
  const user = req.body;
  const createdUser = usersService.createUser(user);

  res.send({
    user: createdUser,
  });
}

module.exports = {
  login,
  register,
};
