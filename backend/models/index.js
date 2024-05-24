const { Sequelize } = require("sequelize");
const DB_URI = process.env.DB_URI;

const sequelize = new Sequelize(DB_URI, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: true,
    native: true,
  },
  define: {
    timestamps: false,
  },
});

const db = {
  sequelize,
  Sequelize,
};

const modelDefiners = {
  users: require("./user.model"),
};

for (const [modelName, modelDefiner] of Object.entries(modelDefiners)) {
  db[modelName] = modelDefiner(sequelize, Sequelize);
}

module.exports = db;
