/* const add = (a, b) => a + b;
const mult = (a, b) => a * b;

console.log(add(2, mult(3, 5))); */


// console.log(compose(add(2), mult(3, 5)))

// !---------------------------------

const users = [{
        name: "Jeff",
        age: 14
    },
    {
        name: "Jack",
        age: 18
    },
    {
        name: "Milady",
        age: 22
    },
];


const myfilter = (cb, arr) => arr.filter(cb);
const myMap = (cb, arr) => arr.map(cb);

let results = myMap(u => u.name, myfilter(u => u.age >= 18, users));

// console.log((u => u.age >= 18)(users));

console.log(results);


// !--------------------------------------------


const filter2 = cb => arr => arr.filter(cb);
const map2 = cb => arr => arr.map(cb);

compose(
    map2(u => u.name),
    filter2(u => u.age >= 18)
)(users)