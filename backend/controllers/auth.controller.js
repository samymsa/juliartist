const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const jwt = require("jsonwebtoken");
const usersService = require("../services/users.service");

function generateAccessToken(user) {
  return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: "365d" });
}

function login(req, res) {
  const user = req.body;
  usersService
    .checkUserCredentials(user)
    .then((fullUser) => {
      const accessToken = generateAccessToken({
        id: fullUser.id,
        email: fullUser.email,
      });

      res.setHeader("Authorization", `Bearer ${accessToken}`);
      res.send({
        user: fullUser,
      });
    })
    .catch((err) => {
      res.status(401).send({
        error: err.message,
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
  const jwtUser = req.jwtUser;

  user.id = jwtUser.id;

  usersService
    .updateUser(user)
    .then(() => {
      usersService
        .getUserById(jwtUser.id)
        .then((fullUser) => {
          // Generate a new access token since the user's email might have changed
          const accessToken = generateAccessToken({
            id: fullUser.id,
            email: fullUser.email,
          });

          res.setHeader("Authorization", `Bearer ${accessToken}`);
          res.send({
            user: fullUser,
          });
        })
        .catch((err) => {
          res.status(500).send({
            error: err.message,
          });
        });
    })
    .catch((err) => {
      res.status(500).send({
        error: err.message,
      });
    });
}

module.exports = {
  login,
  register,
  update,
};
