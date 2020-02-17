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
