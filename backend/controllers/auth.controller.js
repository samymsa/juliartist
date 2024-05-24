const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const jwt = require("jsonwebtoken");
const usersService = require("../services/users.service");

function generateAccessToken(user) {
  return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: "365d" });
}

function login(req, res) {
  const user = req.body;
  usersService.getUserByEmail(user.email).then((fullUser) => {
    if (!fullUser || fullUser.password !== user.password) {
      return res.status(401).send({
        error: "Invalid email or password",
      });
    }

    const accessToken = generateAccessToken({
      id: fullUser.id,
      email: fullUser.email,
    });

    res.setHeader("Authorization", `Bearer ${accessToken}`);
    res.send({
      user: fullUser,
    });
  });
}

function register(req, res) {
  const user = req.body;
  usersService.createUser(user).then(() => {
    login(req, res);
  });
}

function update(req, res) {
  const user = req.body;
  usersService.updateUser(user).then((updatedUser) => {
    res.send({
      user: updatedUser,
    });
  });
}

module.exports = {
  login,
  register,
  update,
};
