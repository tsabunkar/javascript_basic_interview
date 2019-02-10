function discount(price, discount) {
    return price - discount;
}

let result = discount(500, 20);
console.log(result);


// !--------------------code with currying---------
function myDiscount(price) {
    return function (discount) {
        return price + discount;
    }
}

let price = myDiscount(500);
let result2 = price(20);
console.log(result2);