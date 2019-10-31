//Object oriented logic//
class Entity {
  constructor(name, weight, price) {
      this.name = name;
      this.weight = weight;
      this.price = price;
  }
  total() {
      return this.weight * this.price;
  }
}
class Rice extends Entity {
  constructor(name, weight, price) {        
      super(name, weight, price)
  }
}
class Pulses extends Entity {
  constructor(name, weight, price) {
      super(name, weight, price)
  }
}
class Wheats extends Entity {
  constructor(name, weight, price) {
      super(name, weight, price)
  }
}
module.exports=Rice, Pulses, Wheats;