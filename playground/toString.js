let str = 12;

let searchStr = '';

console.log(str.toString());
console.log(typeof str.toString());
console.log(str.toString().trim().toLowerCase());
console.log(
  str
    .toString()
    .trim()
    .toLowerCase()
    .indexOf(searchStr.toString().trim().toLowerCase())
);
