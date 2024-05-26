const { users } = require("../models");

function createUser(user) {
  return users.create(user);
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

function getUserByEmail(email) {
  return users.findOne({
    where: {
      email,
    },
  });
}

module.exports = {
  createUser,
  updateUser,
  getUserById,
  getUserByEmail,
};
