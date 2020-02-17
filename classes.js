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

const buildCar = (brand, model, color) => {
  return new Car(brand, model, color);
};

console.log(buildCar("Ford", "Focus", "Black"));

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
      return new Employee(e, jobArr[i]);
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

//030307
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  applyDiscount(discount) {
    this.price *= 1 - discount / 100;
  }
}

class Receipt {
  constructor(products) {
    this.products = products;
  }
  calcTotal() {
    let total = 0;
    this.products.forEach(e => {
      total += e.price;
    });
    return total;
  }
}

const getReceipt = (labels, prices, discounts) => {
  if (
    labels.length != prices.length ||
    prices.length != discounts.length ||
    labels.length != discounts.length
  ) {
    return "please enter matching labels, prices and discounts array";
  } else {
    //First create an array of products with labels and prices with discounts
    let productArr = labels.map((e, i) => {
      return new Product(e, prices[i]);
    });
    //Then apply discounts
    productArr.forEach((e, i) => {
      e.applyDiscount(discounts[i]);
    });
    //Then make a receipt of this array of products
    let myReceipt = new Receipt(productArr);
    //log the receipt and total
    console.log(myReceipt);
    console.log(myReceipt.calcTotal());
  }
};
let myLabels = ["apple", "bananas", "bread", "cookies", "broccoli", "onions"];
let myPrices = [100, 200, 500, 1000, 40, 20];
let myDiscounts = [10, 25, 20, 15, 5, 10];

getReceipt(myLabels, myPrices, myDiscounts);
