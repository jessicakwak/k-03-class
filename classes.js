//030301
class Bike {
  constructor() {
    this.brand = "Yamaha";
  }
}

let myBike = new Bike();
console.log(myBike);

//030302
class Student {
  constructor(fName, lName, age) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
  }
}

let newStudent = new Student("John", "Smith", 18);
console.log(newStudent);

//030303
class Car {
  constructor(brand, model, color) {
    this.brand = brand;
    this.model = model;
    this.color = color;
  }
}

let myCar = new Car("Ford", "Focus", "Black");
console.log(myCar);

//030304
class Animal {
  constructor(name, verb, sound = "") {
    this.name = name;
    this.verb = verb;
    this.sound = sound;
  }
  speak() {
    return this.sound == ""
      ? `${this.name} ${this.verb}`
      : `${this.name} says '${this.sound}'`;
  }
}

console.log(new Animal("Dog", "barks").speak());
console.log(new Animal("Cat", "meows").speak());
console.log(new Animal("Cow", "eats", "moo").speak());
console.log(new Animal("Lion", "roars").speak());
console.log(new Animal("Duck", "plays", "quack").speak());

//030305
class Employee {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }
}

const makeEmployees = (nameArr, jobArr) => {
  if (nameArr.length !== jobArr.length) {
    return "Please enter matching arrays of names and jobs";
  } else {
    return nameArr.map((e, i) => {
      return {
        name: e,
        job: jobArr[i]
      };
    });
  }
};

let names = ["Alice", "Bernard", "Catherine", "David"];
let threeNames = ["Alice", "Bernard", "Catherine"];
let jobs = ["Accountant", "Biz Manager", "Cleaner", "Director"];
console.log(makeEmployees(names, jobs));
console.log(makeEmployees(threeNames, jobs));

//030306
class Traveler {
  constructor(name) {
    this.cities = ["Bangkok", "Tokyo", "New York", "Rome", "Berlin"];
    this.name = name;
    this.city = this.cities[0];
  }

  pickRandom() {
    this.city = this.cities[Math.floor(Math.random() * 5)];
    return `${this.name} is going to ${this.city}`;
  }
}

console.log(new Traveler("Jessica").pickRandom());
