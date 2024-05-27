function checkout(req, res) {
  setTimeout(() => {
    res.status(200).json({ message: "Payment processed successfully" });
  }, 1000); // Simulate payment processing
}

module.exports = {
  checkout,
};
