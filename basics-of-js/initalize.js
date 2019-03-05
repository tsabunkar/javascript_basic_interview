// !---------------------Primitive Data-type------------------------(builtin/primitive/primary)

var height = 12; // lossely typed language
// 6 primitive data-type
// undefined
// null
// boolean
// string
// number
// symbol

var weight; // variable declaration
// weight = 85; // variable initialziation

console.log(height);
console.log(typeof (height));

console.log(weight);
// var weight

var person = null;

console.log(person);

// var personName = "Tejas Sabunkar";
var personName = 'Tejas Sabunkar';

console.log(personName);

let personAge = Symbol("tejas"); // m'my refer / different hashcode values
let personAge2 = Symbol("tejas");
console.log(personAge);
console.log(personAge2);

console.log(personAge == personAge2); // it will check only the value
console.log(personAge === personAge2); // it will check  value and data-type

let firstName = 'tejas';
let lastName = 'tejas';

console.log(firstName == lastName);
console.log(firstName === lastName);

// !---------------------Secondary Data-type------------------------(secondary/custom/userdefine)

// curl-barses approach
let watch = { // property : value
    color: 'silver',
    belt: 'chain',
    isDigital: false,
    cost: 1000,
    displayTime: displayTime()

} // Object, not a class

function displayTime() {
    return new Date();
}

console.log(watch);

console.log(watch.isDigital);

// change any property value inside that object -> 
// !1st way of assignin the poperty for an object
// watch.isDigital = true;

// !2nd way of re-/assignin the poperty for an object
// watch['isDigital'] = true;
watch['color'] = 'black'

console.log('------');
console.log('1st way of prinitng' + watch.belt);
console.log('2nd way of prinitng', watch['belt']);

// 2nd way of creating an object
let watch2 = new Object(); // Initialize the object of watch 

watch2.color = 'Grey' // assigning the values to the properties of watch object
watch2.isDigital = false
watch2.displayTemp = (function () { // asigning the func name doesnot make sense
    return new Date();
})(); // self invoking function

console.log(watch2);

watch2['isDigital'] = true
console.log(watch2);

// 3rd way of creating an object

console.log('++++++++++CONSTRUCTOR FUNC++++++++++');
// constructor function
function Watches(myColor, myBelt, myCost) { // Watch3-> CLASSS
    this.color = myColor; // this -> refers to the current object which was created inside the m'my (watch3)
    // inisde the  watch3 referenced object has now 3 properties which r -> color, belt and cost
    this.belt = myBelt;
    this.cost = myCost;
}

// watch3 -> Object
let watch3 = new Watches('red', 'leather', 2000); // new -> Object
let watch5 = new Watches(); // C.I ( Im creating an object by constructor injection)
// my object and its properties got creating in  m'my but the values to that property were never assigned

let watch4 = new Watches('green', 'chain', 3000); //(I m injecting/assigning the propertie's value to the object using constructor)
// watch4 <- was a reference which was pointing out to the object instance which was created inside m'my


console.log(watch3);
console.log(watch4);
console.log(watch5);
// console.log(watch3.color);

watch5.color = 'pink'
console.log(watch5);
console.log(watch3.isDigital); // ! Why is it undefined, it should have been Error ?

console.log(watch3.isDigital = true);
console.log(watch3); // myColor, myBelt, myCost, isDigital

watch3.isImported;
console.log('watch3 --',watch3); 

// console.log(shree); // !here it is error, not undefined

// Prototype-