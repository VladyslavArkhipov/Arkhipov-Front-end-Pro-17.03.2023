class Hamburger {
  constructor(burger, stuffing) {
    this.burger = burger;
    this.stuffing = stuffing;
  }
  topping = {
    price: 0,
    kal: 0,
  };
  static SIZE_SMALL = {
    price: 50,
    kal: 20,
  };
  static SIZE_LARGE = {
    price: 100,
    kal: 40,
  };
  static STUFFING_CHEESE = {
    price: 10,
    kal: 20,
  };
  static STUFFING_SALAD = {
    price: 20,
    kal: 5,
  };
  static STUFFING_POTATO = {
    price: 15,
    kal: 10,
  };
  static TOPPING_MAYO = {
    price: 20,
    kal: 5,
  };
  static TOPPING_SAUCE = {
    price: 15,
    kal: 0,
  };

  addTopping(typeOfTopping) {
    this.topping.price += typeOfTopping.price;
    this.topping.kal += typeOfTopping.kal;

    return this.topping;
  }

  calulate() {
    let result;
    if (this.stuffing != undefined) {
      return (result = this.burger.kal + this.stuffing.kal + this.topping.kal);
    } else {
      return (result = this.burger.kal + this.topping.kal);
    }
  }

  calulatePrice() {
    let result;
    if (this.stuffing != undefined) {
      return (result =
        this.burger.price + this.stuffing.price + this.topping.price);
    } else {
      return (result = this.burger.price + this.topping.price);
    }
  }
}

let p = new Hamburger(Hamburger.SIZE_SMALL);
console.log(p);

let a = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
console.log(a);

p.addTopping(Hamburger.TOPPING_MAYO);
console.log(p);

console.log("Calories:" + p.calulate());
console.log("Price:" + p.calulatePrice());

p.addTopping(Hamburger.TOPPING_SAUCE);
console.log(p);

console.log("Calories:" + p.calulate());
console.log("Price:" + p.calulatePrice());
