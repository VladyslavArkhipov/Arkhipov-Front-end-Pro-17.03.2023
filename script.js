class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  minHumanAge = 18;
  getHumanProfile() {
    return `Name: ${this.name} | Age: ${this.age}`;
  }
}

class Auto {
  constructor(brand, model, year, number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.number = number;
  }

  owner = `Empty`;

  addOwner(human) {
    if (human.age < human.minHumanAge) {
      return console.log("This human is to young");
    } else {
      return (this.owner = human);
    }
  }

  getAutoInfo() {
    if (this.owner === `Empty`) {
      return console.log(
        `Brand: ${this.brand} | Model: ${this.model} | Year: ${this.year} | Number: ${this.number} | Owner: ${this.owner}`
      );
    } else {
      return console.log(
        `Brand: ${this.brand} | Model: ${this.model} | Year: ${this.year} | Number: ${this.number} | Owner: ` +
          this.owner.getHumanProfile()
      );
    }
  }
}

const human1 = new Human("Vlad", 23);
console.log(human1);
console.log(human1.getHumanProfile());

const auto1 = new Auto("Honda", "Civic", "2005", "BH5503BX");
console.log(auto1);

auto1.addOwner(human1);
console.log(auto1);

auto1.getAutoInfo();

const human2 = new Human("Denis", 14);
console.log(human2);
console.log(human2.getHumanProfile());

const auto2 = new Auto("Daewoo", "Lanos", "2000", "BH3412AK");
console.log(auto2);

auto2.addOwner(human2);
console.log(auto2);

auto2.getAutoInfo();
