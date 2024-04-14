function validateUser(user) {
  return user?.email && user?.password;
}

function createUser(user) {
  console.log("Creating user", user);
  return user;
}

module.exports = {
  validateUser,
  createUser,
};