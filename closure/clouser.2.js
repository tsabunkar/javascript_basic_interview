function makeCounter() {
    let count = 0;
    return () => {
        return count++;
    }
}

let counter1 = makeCounter();
let counter2 = makeCounter();

console.log('****** counter-1 *******');
console.log(counter1());
console.log(counter1());
console.log('****** counter-2 *******');
console.log(counter2());