const collectionsService = require("../services/collections.service");

function getAll(req, res) {
  res.send(collectionsService.getAll());
}

module.exports = {
  getAll,
};
