var test = "I'm global";

function testScope() {
    var test = "I'm local";

    console.log('op1 ', test);
}

testScope(); // output: 

console.log('op2 ', test); // output: