// let inputArray = [123456789, 987654321];
let inputArray = [386, 752, 961, 573, 839];
// let inputArray = [38765, 21743, 67628];


// !Add +1 in the middle digit of each number
let firstRuleArray = inputArray.map(element => {

    // !find the middle element
    let elementArray = element.toString().split(''); //[ '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
    let elementDigitArray = elementArray.map(ele => parseInt(ele)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    let middleElement = elementDigitArray[Math.trunc(elementDigitArray.length / 2)];

    // !Add 1 to the middle element
    const updatedMiddleElement = middleElement + 1;

    // !replace back the element to array
    elementDigitArray[Math.trunc(elementDigitArray.length / 2)] = updatedMiddleElement;

    return parseInt(elementDigitArray.join('')); // join the array elements and convert string to int

});


// !Interchange the  first two character
let secondRuleArray = firstRuleArray.map(element => {
    let elementArray = [...element + '']; // spilt element to digit Array (In string format)
    [elementArray[0], elementArray[1]] = [elementArray[1], elementArray[0]]; // Interchange first two characher
    let digitArray = elementArray.map(n => parseInt(n)); // converting elementArray to digitArray;
    return +(digitArray.join(''));
});

console.log('Given question array', inputArray);
console.log('1st rule applied', firstRuleArray);
console.log('2nd rule applied', secondRuleArray);

// ! Find the smallest number
let sortedArray = secondRuleArray.sort((a, b) => a > b);

let finalArray = [...sortedArray + ''];
console.log('Expected Output : ', finalArray[2]);