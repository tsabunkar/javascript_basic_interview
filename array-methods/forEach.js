let arrNum = [1, 2, 3, 4];

let flag = false;
arrNum.forEach((num) => {
  //   if (num === 2) {
  if (num === 12) {
    flag = true;
  }
});

// You can make the flag to change its value when condition is statisifed inside
// callback fun of ForEach loop
console.log(flag);

// !-------------------------
