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
// console.log(flag);

// !----------------------------------------------------------------------------------

/**
 * code below would print 1 2 and then stop?
 *
 * The reason is that we are passing a callback function in our forEach function, which
 * behaves just like a normal function and is applied to each element no matter if we
 * return from one i.e. when element is 2 in our case.
 */

array = [1, 2, 3, 4];

array.forEach(function (element) {
  console.log(element);

  if (element === 2) return;
});
// Output: 1 2 3 4

// !There is no way to stop or break a forEach() loop other than by throwing an exception.
// ! If you need such behavior, the forEach() method is the wrong tool.

// !--------------------------------------------------------------------------

// *You cannot ‘break’ forEach loop

const array2 = [1, 2, 3, 4];
array2.forEach(function (element) {
  console.log(element);

  // if (element === 2) break;
});
// Output: Uncaught SyntaxError: Illegal break statement
// No, it won’t even run because the break instruction is not technically in a loop.

// !--------------------------------------------------------------------------

// *You cannot ‘continue’

const array3 = [1, 2, 3, 4];
array3.forEach(function (element) {
  // if (element === 2) continue;

  console.log(element);
});
// Output: Uncaught SyntaxError: Illegal continue statement: no surrounding iteration
// statement

// No, it won’t even run because the continue instruction is not in a loop, similar
// to the break instruction.
