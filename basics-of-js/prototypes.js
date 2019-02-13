function Cat(cname, ccolor) {
    this.catName = cname;
    this.catColor = ccolor;
    catEyes = 'blue';
}
Cat.prototype.age = 0;

var catC = new Cat("Fluffy", "White");

console.log(Cat.catName);
console.log(catC.catName);
console.log(catC.catEyes);
console.log(Cat());


//Cat is a constructor function. A constructor function really is no different than any other function,
// in fact the term "constructor function" is just a common nomenclature that suggests that the function
// will create properties on the object being created (represented by this). In other words, when we say
// var catC = new Cat("Fluffy", "White"), all that really is happening is the catC object is created and 
//assigned to this for the duration of the call to the Cat function. Therefore, inside the function, 
//this.name = name; is the same as saying catC.name = name. Hopefully, that helps to clarify that
// constructor functions are not doing anything magic, they are just normal functions that are creating 
// properties on this -- even though we use them in a way that is similar to how classes work in other languages.
// In fact, using the new keyword, you can create an object out of any function (it just doesn't make sense
// with other functions).


console.log('-----------');
console.log(catC);
console.log(Cat.prototype);

//  notice that Cat.prototype.age isn't really part of the Cat function.
//  It's also helpful to realize when this code gets executed. Seeing the code all lumped together
// like that might fool you into thinking that Cat.prototype.age = 0; is being called when a new
// cat is created, which of course, on closer inspection is obviously not true. Usually this code 
//(including the creation of the Cat function above it) is called when a web page is first loaded;
// thus making the Cat function available to be called. So think about what is happening there. 
//The Cat function is being created and then the age property is being created (with a value of 0)
// on the Cat function's prototype.


// Functions can be used to create class-like functionality in JavaScript; and all functions have
//  a prototype property. That prototype property is somewhat like a class definition in other 
// object-oriented langauge; but it is more than that. It is actually an instance of an object and 
// every function in JavaScript has one whether you use it or not. Every function
//  (constructor function or not) has a prototype object instance hanging off of it, interesting, huh?

// So, let's talk about how this prototype object is actually used. When you create an object using
//  the new keyword, it creates a new object, passes it in as this to the constructor function 
// (letting that function do to it whatever it wants) and then, and this is the important part,
//  it takes the object instance that is pointed to by that function's prototype property and
//  assigns it as the prototype for that object

//So functions have prototypes and objects have protos. They are very similar, in fact, 
// a function's prototype and an object's proto often (in fact, usually) point to the same object in memory.

console.log('********');
console.log(Cat.__proto__);
// Constructor func -> has prototype => (Cat- constructor func)
console.log('Prototype of Constructor func', Cat.prototype);
// Object -> has __proto__ => (catC- Object)
console.log('', catC.__proto__);

