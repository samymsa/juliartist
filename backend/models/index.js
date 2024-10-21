const { Sequelize } = require("sequelize");
const configs = require(__dirname + "/../config/config.js");
const env = process.env.NODE_ENV || "development";
const config = configs[env];

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
  creditCards: require("./credit-card.model"),
};

for (const [modelName, modelDefiner] of Object.entries(modelDefiners)) {
  db[modelName] = modelDefiner(sequelize, Sequelize);
}

// Relationships
db.users.hasMany(db.creditCards);
db.creditCards.belongsTo(db.users);

module.exports = db;
