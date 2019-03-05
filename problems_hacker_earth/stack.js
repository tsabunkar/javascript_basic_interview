function main(input) {
    let splitedValues = input.split('\n');
    console.log(splitedValues);
}

let removeEmptyString = array => {
    return array.filter(elem => {
        return elem !== '' ? elem : null;
    })
}

let convertStringToInt = (array) => {
    return array.map(ele => {
        return parseInt(ele);
    });
}



main('10 5\n\ 10 9 1 2 3 4 5 6 7 8');