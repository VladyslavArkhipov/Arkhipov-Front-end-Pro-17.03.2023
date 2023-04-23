class SuperMath {
  check(obj) {
    let decision = confirm(`Do you want to make this aktion?
  ${obj.X} ${obj.znak} ${obj.Y}`);
    if (decision === true) {
      if (obj.znak === "+") {
        return this.__proto__.plus(obj);
      } else if (obj.znak === "-") {
        return this.__proto__.minus(obj);
      } else if (obj.znak === "*") {
        return this.__proto__.umnozhit(obj);
      } else if (obj.znak === "/") {
        return this.__proto__.podelit(obj);
      } else if (obj.znak === "%") {
        return this.__proto__.procent(obj);
      } else {
        return this.__proto__.unknownZnak();
      }
    } else {
      return this.input();
    }
  }

  input() {
    let newAction = {
      X: +prompt("Enter the first number:"),
      Y: +prompt("Enter the second number:"),
      znak: prompt("Enter the znak:"),
    };
    return this.check(newAction);
  }
}

class Znak {
  result;
  plus(obj) {
    return console.log((this.result = obj.X + obj.Y));
  }
  minus(obj) {
    return console.log((this.result = obj.X - obj.Y));
  }
  umnozhit(obj) {
    return console.log((this.result = obj.X * obj.Y));
  }
  podelit(obj) {
    return console.log((this.result = obj.X / obj.Y));
  }
  procent(obj) {
    return console.log((this.result = obj.X % obj.Y));
  }
  unknownZnak() {
    return console.log("Your znak is unknown");
  }
}

SuperMath.prototype.__proto__ = Znak.prototype;

let obj = { X: 12, Y: 3, znak: "+" };

p = new SuperMath();
p.check(obj);
