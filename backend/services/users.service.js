function validateUser(user) {
  return user?.email && user?.password;
}

function createUser(user) {
  let createdUser = {
    id: 1,
    ...user,
  };
  delete createdUser.password;

  return user;
}

function updateUser(user) {
  return user;
}

function getUserByEmail(email) {
  return {
    id: 1,
    email,
  };
}

module.exports = {
  validateUser,
  createUser,
  updateUser,
  getUserByEmail,
};
