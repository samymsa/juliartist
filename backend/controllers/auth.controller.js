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

  usersService
    .createUser(user)
    .then(() => {
      login(req, res);
    })
    .catch((err) => {
      res.status(400).send({
        error: err.message,
      });
    });
}

function update(req, res) {
  const user = req.body;
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);

  if (!decoded?.id) {
    return res.status(401).send({
      error: "Unauthorized",
    });
  }

  user.id = decoded.id;

  usersService.updateUser(user).then((updatedUser) => {
    usersService.getUserById(user.id).then((fullUser) => {
      const accessToken = generateAccessToken({
        id: fullUser.id,
        email: fullUser.email,
      });

      res.setHeader("Authorization", `Bearer ${accessToken}`);
      res.send({
        user: fullUser,
      });
    });
  });
}

module.exports = {
  login,
  register,
  update,
};
