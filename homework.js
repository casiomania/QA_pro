var services = {
  "стрижка":      "60 грн.",
  "гоління":      "80 грн.",
  "миття голови": "100 грн.",

  totalPrice: function () {
    var total = 0;
    for (var key in this) {
      if (this.hasOwnProperty(key) && typeof this[key] === "string") {
        total += parseInt(this[key]);
      }
    }
    return total + " грн.";
  },

  minPrice: function () {
    var min = Infinity;
    for (var key in this) {
      if (this.hasOwnProperty(key) && typeof this[key] === "string") {
        var val = parseInt(this[key]);
        if (val < min) min = val;
      }
    }
    return min + " грн.";
  },

  maxPrice: function () {
    var max = 0;
    for (var key in this) {
      if (this.hasOwnProperty(key) && typeof this[key] === "string") {
        var val = parseInt(this[key]);
        if (val > max) max = val;
      }
    }
    return max + " грн.";
  }
};

services["Розбити скло"] = "200 грн.";
services["Не розбивати скло :)"] = "999 грн.";

console.log("Загальна ціна:     " + services.totalPrice());
console.log("Мінімальна ціна:   " + services.minPrice());
console.log("Максимальна ціна:  " + services.maxPrice());