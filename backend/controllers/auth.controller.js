const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const jwt = require("jsonwebtoken");
const usersService = require("../services/users.service");

function generateAccessToken(user) {
  return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: "365d" });
}

function login(req, res) {
  const user = req.body;

  if (!usersService.validateUser(user)) {
    return res.status(401).send({
      error: "Invalid email or password",
    });
  }

  delete user.password; // Don't store password in token
  const accessToken = generateAccessToken(user);
  const fullUser = usersService.getUserByEmail(user.email);

  res.setHeader("Authorization", `Bearer ${accessToken}`);
  res.send({
    user: fullUser,
  });
}

function register(req, res) {
  const user = req.body;
  usersService.createUser(user);
  login(req, res);
}

function update(req, res) {
  const user = req.body;
  const updatedUser = usersService.updateUser(user);
  res.send({
    user: updatedUser,
  });
}

module.exports = {
  login,
  register,
  update,
};
