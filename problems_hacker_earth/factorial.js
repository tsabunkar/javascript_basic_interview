function main(input) {
    let result = factorialNumber(input);
    console.log(result);       // Writing output to STDOUT
}

// Write your code here
let factorialNumber = n =>{
     return (n !== 1) ? n * factorialNumber(n - 1) : 1;
}
main(3);