const sum = (n1, n2) => {
    return n1 + n2;
};

// console.log(sum(1, 2));

// !_-------------------

const makeSum = (n) => {
    return (p) => {
        return n + p;

        // sum(n, p);
    }
};

const result1 = makeSum(1);

console.log(result1(2));



// *-------------------------

const makeMoreSum = (foo) => {
    return (n1, n2) => {
        return sum(foo(n1), n2);
    }
}

const squareMe = makeMoreSum(x => {
    return x * x; //remove return
});

console.log(squareMe(2, 3));