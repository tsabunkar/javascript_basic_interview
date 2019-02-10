function makeCounter() {
    let count = 0;
    return () => {
        return count++;
    }
}

let counter1 = makeCounter();
let counter2 = makeCounter();

console.log('****** counter-1 *******');
console.log('op1', counter1());
console.log('op2', counter1());
console.log('****** counter-2 *******');
console.log('op3', counter2());