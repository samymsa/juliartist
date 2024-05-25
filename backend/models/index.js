const { Sequelize } = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config);
}

const db = {
  sequelize,
  Sequelize,
};

const modelDefiners = {
  users: require("./user.model"),
  products: require("./product.model"),
};

for (const [modelName, modelDefiner] of Object.entries(modelDefiners)) {
  db[modelName] = modelDefiner(sequelize, Sequelize);
}

module.exports = db;
