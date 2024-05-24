const { users } = require("../models");

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
  createUser,
  updateUser,
  getUserByEmail,
};
