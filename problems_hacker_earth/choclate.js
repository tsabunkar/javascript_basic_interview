function main(input) {
    console.log(input);
    let splitedValues = input.split('\n');

    for (let index = 1; index <= parseInt(splitedValues[0]); index++) {
        let chocolatesAndFriends = removeEmptyString(splitedValues[index].split(' '));
        console.log(chocolatesAndFriends);
        chocolatesAndFriends = convertStringToInt(chocolatesAndFriends);
        let friends = chocolatesAndFriends[0];
        let chocolates = chocolatesAndFriends[1];

        let result = checkIsChocolateAvaliable(chocolates, friends);
        console.log(result);

    }

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

let checkIsChocolateAvaliable = (chocolates, firends) => {
    let result = chocolates / firends;
    return (result % 1 == 0) ? 'Yes' : 'No';
}

main('2\n\ 5 14 \n\ 3 21');