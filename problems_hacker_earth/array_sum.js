function main(input) {

    let splitedValues = input.split('\n');
    // console.log(typeof (splitedValues[0]));
    // console.log(Math.trunc(splitedValues[1].length / 2));
    console.log(Math.trunc(splitedValues[1].length / 2));
    console.log(Math.trunc(splitedValues[2].length / 2));
    console.log(parseInt(splitedValues[0]));
    console.log(parseInt(splitedValues[0]) == Math.trunc(splitedValues[1].length / 2) == Math.trunc(splitedValues[2].length / 2));

    let sum = sumArray(splitedValues[0], splitedValues[1], splitedValues[2]);
    console.log(sum);



}

let sumArray = (size, a, b) => {

    let array1 = a.split(' ');
    let array2 = b.split(' ');

    let array11 = removeEmptyString(array1);
    let array12 = removeEmptyString(array2);

    let array111 = convertStringToInt(array11);
    let array112 = convertStringToInt(array12);

    return sum = array111.map(function (num, idx) {
        return num + array112[idx];
    })

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


main(' 5\n\ 1 2 3 4 5 \n\ 4 5 3 2 10');