function main(input) {
    let splitedValues = input.split('\n');
    let wordLength = parseInt(splitedValues[0]);
    let word = splitedValues[1];
    console.log(word, wordLength);
    let words = word.split('');
    console.log(words);
    if (words.length >= 11) {
        if (words.includes('a')) {

        }
    } else {
        console.log(0);
    }


}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail

main('13\n\aahkcreeatrha');