const db = require("./models");
db.sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
    process.exit(1);
  });

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/auth", require("./routes/auth.route"));
app.use("/products", require("./routes/products.route"));
app.use("/credit-cards", require("./routes/credit-cards.route"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
