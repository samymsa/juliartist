const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/auth", require("./routes/auth.route"));
app.use("/products", require("./routes/products.route"));
app.use("/collections", require("./routes/collections.route"));
app.use("/credit-cards", require("./routes/credit-cards.route"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
