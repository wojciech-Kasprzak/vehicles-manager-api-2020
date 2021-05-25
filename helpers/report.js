module.exports = {
  filterByDate: function (data, obj) {
    let result = data.filter(function (el) {
      let d = new Date(el.date);
      let month = d.getMonth() + 1;
      let year = d.getFullYear();
      if (!obj.month) {
        return year == obj.year;
      } else if (!obj.year) {
        return month == obj.month;
      } else {
        return month == obj.month && year == obj.year;
      }
    });
    if (result.length == 0) {
      return null;
    } else {
      return result;
    }
  },

  count: function (array) {
    let result = {
      totalPrice: 0,
      averageFuelConsumption: 0,
      kilometers: 0,
      amountFuel: 0,
    };
    for (const key in result) {
      array.forEach((elem) => {
        result[key] = result[key] + elem[key];
      });
    }
    result.averageFuelConsumption =
      result.averageFuelConsumption.toFixed(1) / array.length;
    return result;
  },
};
