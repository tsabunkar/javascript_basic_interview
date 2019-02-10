const sum = (n1, n2) => {
    return n1 + n2;
};

// console.log(sum(1, 2));

// !_-------------------

const makeSum = (n) => {
    // console.log(n, p);
    return (p) => {
        // return n + p;

        return sum(n, p);
    }
};

const result1 = makeSum(1);

console.log(result1(2));



// *-------------------------

const makeMoreSum = (foo) => { // foo -> f [return square of a number]
    return (n1, n2) => {
        return sum(foo(n1), n2);
    }
}

const result = makeMoreSum(x => {
    return x * x; //remove return
});

console.log(result(2, 3));
