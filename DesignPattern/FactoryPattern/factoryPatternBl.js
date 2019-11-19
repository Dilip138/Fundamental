class Car {
  constructor(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
  }
}
class Suv extends Car {
  constructor(name, color, price) {
    super(name, color, price)
    this.type = "Suv";
  }
}
class Sedan extends Car {
  constructor(name, color, price) {
    super(name, color, price)
    this.type = "Sedan";

  }
}
/**
* @description : Car Factory class which will return suv or sedan
* @param {name} name of suv/sedan
* @param {color} color of suv/sedan
* @param {price} price of suv/sedan
*/
class CarFactory {
  specification(name, color, price, type) {
    if (type === "Suv") {
      return new Suv(name, color, price);

    } else if (type === "Sedan") {
      return new Sedan(name, color, price);

    }
    else {
      console.log("invalid choice");
      return null;
    }
  }
}
module.exports = {
  Suv, Sedan, CarFactory
}

