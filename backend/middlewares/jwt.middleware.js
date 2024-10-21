const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

function checkJwt(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token === null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, JWT_SECRET, (err, jwtUser) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.jwtUser = jwtUser;
    next();
  });
}

module.exports = {
  checkJwt,
};
