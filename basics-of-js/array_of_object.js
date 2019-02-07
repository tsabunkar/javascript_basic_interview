let manufacture = [];

function Bottle(bottleId, bottleCompany, bottleType) {
    this.bottleId = bottleId;
    this.bottleCompany = bottleCompany;
    this.bottleType = bottleType
}

let bottle1 = new Bottle(1, 'Biselri', 'Plastic');

let bottle2 = {
    bottleId: 2,
    bottleCompany: 'Kinely',
    bottleType: 'Metal'
};

let bottle3 = new Object();

bottle3.bottleId = 3
bottle3.bottleCompany = 'Rail Nair'
bottle3.bottleType = 'Plastic'

manufacture.push(bottle1, bottle2, bottle3);

console.log(manufacture);
console.log(manufacture[0].bottleCompany);

console.log('-----Iterate only company name ------------');

manufacture.forEach(bottle => {
    console.log(bottle.bottleCompany);
})