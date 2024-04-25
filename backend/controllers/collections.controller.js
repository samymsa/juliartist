const collectionsService = require("../services/collections.service");

function getCollections(req, res) {
  res.send(collectionsService.getCollections());
}

module.exports = {
  getCollections,
};
