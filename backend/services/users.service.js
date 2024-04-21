function validateUser(user) {
  return user?.email && user?.password;
}

function createUser(user) {
  console.log("Creating user", user);
  let createdUser = {
    id: 1,
    ...user,
  };
  delete createdUser.password;

  return user;
}

function updateUser(user) {
  console.log("Updating user", user);
  return user;
}

function getUserByEmail(email) {
  console.log("Getting user by email", email);
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
