function validateUser(user) {
  return user?.email && user?.password;
}

module.exports = {
  validateUser,
};