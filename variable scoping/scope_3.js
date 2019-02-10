var test = "I'm global";

function testScope() {
    var test = "I'm local";

    console.log('output1 ', test);// output: 
}

testScope(); 

console.log('output2 ', test); // output: