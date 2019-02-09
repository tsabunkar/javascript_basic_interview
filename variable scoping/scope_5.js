var test = "I'm global";

function testScope() {
    var test = "I'm local";

    console.log('op1 ', test);
}

console.log('op2 ', test); // output:

testScope(); // output: 

console.log('op3 ', test); // output: