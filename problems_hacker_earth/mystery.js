function main(input) {
    let splitedValues = input.split('\n');
    let count = splitedValues.length;
    for (let index = 0; index < splitedValues.length; index++) {
        console.log(index);

    }
    console.log(splitedValues);
}


main('0\n\ 1 \n\ 5 \n\ 12 \n\ 22 \n\ 424');