const { users } = require("../models");

function validateUser(user) {
  return user?.email && user?.password;
}

async function createUser(user) {
  const createdUser = await users.create(user);
  return createdUser;
}

async function updateUser(user) {
  const updatedUser = await users.update(user, {
    where: {
      id: user.id,
    },
  });

  return updatedUser;
}

async function getUserByEmail(email) {
  const user = await users.findOne({
    where: {
      email,
    },
  });

  return user;
}

module.exports = {
  validateUser,
  createUser,
  updateUser,
  getUserByEmail,
};
