function main(input) {
    
    let splitedValues = input.split(' ');
    let inputElements = convertStringToInt(splitedValues);

    let twoDimensionArray = generateTwoDimensionArray(inputElements);
    let {
        sumOne,
        sumTwo
    } = sumArray(twoDimensionArray);
    console.log(sumOne);
    console.log(sumTwo);

}

let convertStringToInt = (array) => {
    return array.map(ele => {
        return parseInt(ele);
    });
}

let generateTwoDimensionArray = inputElements => {
    let items = [
        [],
        [],
        []
    ];

    let count = 9;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            items[i][j] = inputElements[9 - count];
            count--;
        }
    }

    return items;

}

let sumArray = twoDimensionArray => {
    let sumOne = twoDimensionArray[0][0] + twoDimensionArray[0][2] + twoDimensionArray[1][1] + twoDimensionArray[2][0] + twoDimensionArray[2][2];
    let sumTwo = twoDimensionArray[0][1] + twoDimensionArray[1][0] + twoDimensionArray[1][2] + twoDimensionArray[2][1];
    return {
        sumOne,
        sumTwo
    };
}

main('1 2 3 4 5 6 7 8 9');