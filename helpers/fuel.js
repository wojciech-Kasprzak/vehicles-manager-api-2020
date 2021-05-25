module.exports = {
  averageFuelConsumption: function (amountFuel, kilometers) {
    let averageFuelConsumption = ((amountFuel * 100) / kilometers).toFixed(2);
    return averageFuelConsumption;
  },
  totalPrice: function (amountFuel, price) {
    let totalPrice = (amountFuel * price).toFixed(2);
    return totalPrice;
  },
};
