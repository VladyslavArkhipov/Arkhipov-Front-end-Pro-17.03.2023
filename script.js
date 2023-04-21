class Human {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

class Flat {
  residentsList = [];
  addResident(resident) {
    return this.residentsList.push(resident);
  }
}

class House {
  constructor(maxFlatsCount) {
    this.maxFlatsCount = maxFlatsCount;
  }
  flats = [];
  addFlat(flat) {
    if (this.flats.length >= this.maxFlatsCount) {
      return console.log("Too much flats");
    } else {
      return this.flats.push(flat);
    }
  }
}

const human1 = new Human("Andrew", "m");
console.log(human1);

const human2 = new Human("Mary", "f");
console.log(human2);

const human3 = new Human("David", "m");
console.log(human3);

const human4 = new Human("Sara", "n");
console.log(human4);

const flat1 = new Flat();
console.log(flat1);
flat1.addResident(human1);
console.log(flat1);

const flat2 = new Flat();
console.log(flat2);
flat2.addResident(human2);
console.log(flat2);

const flat3 = new Flat();
console.log(flat3);
flat3.addResident(human3);
console.log(flat3);

const flat4 = new Flat();
console.log(flat4);
flat4.addResident(human4);
console.log(flat4);

const house1 = new House(3);
console.log(house1);
house1.addFlat(flat1);
console.log(house1);

house1.addFlat(flat2);
console.log(house1);

house1.addFlat(flat3);
console.log(house1);

house1.addFlat(flat4);
console.log(house1);
