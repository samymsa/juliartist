require("dotenv").config();

module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./db.sqlite",
    define: {
      timestamps: false,
    },
  },
  production: {
    use_env_variable: "DB_URI",
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      ssl: true,
      native: true,
    },
    define: {
      timestamps: false,
    },
  },
};
