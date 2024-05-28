const { users } = require("../models");
const bcrypt = require("bcrypt");

function createUser(user) {
  return users.create({
    ...user,
    password: bcrypt.hashSync(user.password, 10),
  });
}

function checkUserCredentials(user) {
  return users
    .findOne({
      where: {
        email: user.email,
      },
    })
    .then((fullUser) => {
      if (!fullUser || !bcrypt.compareSync(user.password, fullUser.password)) {
        return Promise.reject(new Error("Invalid email or password"));
      }

      return fullUser;
    });
}

function updateUser(user) {
  return users.update(user, {
    where: {
      id: user.id,
    },
  });
}

function getUserById(id) {
  return users.findByPk(id);
}

module.exports = {
  createUser,
  updateUser,
  getUserById,
  checkUserCredentials,
};
