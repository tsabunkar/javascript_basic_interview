// Creating object using {}
console.log('-------Creating object using {}--------------');
let Person1 = {
    personId: 1,
    personName: 'Tejas',
    personSalary: 12000
};

console.log(Person1);

console.log('------Creating object using new Object()-----------------');

let Person2 = new Object();
Person2.name = 'Sabunkar';
Person2.dob = 12;

console.log(Person2);

// !NOTE : Object are mutable in nature-> reference is copied not the value

let Person3 = Person2;
Person3.income = 12;

console.log(Person3);
console.log(Person2);

Person3.income = 111;

console.log(Person3);
console.log(Person2);

console.log(typeof (Person3));

console.log('----------------Object constructor ----------------------------');

function Employee(name, salary, isMarried) { // Constructor
    this.name = name;
    this.salary = salary;
    this.isMarried = isMarried;
}

var employee1 = new Employee("Tejas", 1200, false); // C.I

console.log(employee1);

employee1.designation = 'SoftwareEngineer'; // adding peroperty 

console.log(employee1);

Employee.natioanlity = 'Indian'; // !not possible

console.log();
console.log(employee1);

// !If we want to add new property or func to Employee (Object constructor) then use -> prototype

/*
All JavaScript objects inherit properties and methods from a prototype:

Date objects inherit from Date.prototype
Array objects inherit from Array.prototype
Person objects inherit from Person.prototype
The Object.prototype is on the top of the prototype inheritance chain:

Date objects, Array objects, and Person objects inherit from Object.prototype. 
*/

function Car(carId, carName, carType) {
    this.carId = carId;
    this.carName = carName;
    this.carType = carType;

}

let car = new Car(1, 'Audi', 'p');
console.log(car);
console.log(car.speed);

console.log('------prototype-----');
Car.prototype.speed = 120;

console.log(car);
console.log('car speed is ', car.speed);
