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
