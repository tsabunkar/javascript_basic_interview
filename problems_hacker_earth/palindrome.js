function main(input) {
    console.log(checkPalindrome(input));
    // process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail


// Write your code here
let checkPalindrome = word => {
    let spiltedCharacters = word.split('');

    // ! Above code will mutate and effect(i,e- reverse) the splitedCharacters array so,
    let reversedCharacters = [...spiltedCharacters].reverse().join('');
    return word === reversedCharacters ? true : false;
}

main('aba');