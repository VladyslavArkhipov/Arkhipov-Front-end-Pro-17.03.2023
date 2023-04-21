class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  humanProfile() {
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
    if (human.age < 18) {
      return console.log("This human is to young");
    } else {
      return (this.owner = human);
    }
  }

  autoInfo() {
    if (this.owner === `Empty`) {
      return console.log(
        `Brand: ${this.brand} | Model: ${this.model} | Year: ${this.year} | Number: ${this.number} | Owner: ${this.owner}`
      );
    } else {
      return console.log(
        `Brand: ${this.brand} | Model: ${this.model} | Year: ${this.year} | Number: ${this.number} | Owner: ` +
          this.owner.humanProfile()
      );
    }
  }
}

const human1 = new Human("Vlad", 23);
console.log(human1);
console.log(human1.humanProfile());

const auto1 = new Auto("Honda", "Civic", "2005", "BH5503BX");
console.log(auto1);

auto1.addOwner(human1);
console.log(auto1);

auto1.autoInfo();

const human2 = new Human("Denis", 14);
console.log(human2);
console.log(human2.humanProfile());

const auto2 = new Auto("Daewoo", "Lanos", "2000", "BH3412AK");
console.log(auto2);

auto2.addOwner(human2);
console.log(auto2);

auto2.autoInfo();
