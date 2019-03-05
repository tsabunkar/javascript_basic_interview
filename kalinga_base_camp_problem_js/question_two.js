// let input = 'All the authorities are multimillionare authoritiessd';
// let input = 'All the authorshfsaeuiusfyjhjaeuiities are multimillionare uathoritiessd aaaaa authoritiep';

// let input = 'All the authorities are multimillionare';
// let input = 'Kindly authorize the technical education';
let input = 'Not all vowels in this statement';

let inputArray = input.split(' ');

// !Check word(s) for ALL vowel exist
const containsAllVowels = inputArray.filter(element => {
    let containsVowelsArray = checkAllVowels(element);
    if (containsVowelsArray !== undefined) {
        return containsVowelsArray;
    }
});


function checkAllVowels(str) {
    const matchedElement = str.match(/[aeiou]/gi); // match for a (or) e (or) i (or) o (or) u
    const uniqueArray = [...new Set(matchedElement)]; // remove unwanted elements
    if (uniqueArray.length === 5 && matchedElement !== null) {
        return str;
    }

}

// !Soritng Alphabateical Order
let sortedStrings = containsAllVowels.sort();

let result = 'Not all vowels';

// !find string with min-length
if (sortedStrings.length > 0) {
    result = containsAllVowels.reduce((a, b) => {
        return a.length <= b.length ? a : b;
    })
}

console.log('Expected Output : ',result);