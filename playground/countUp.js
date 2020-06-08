function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    console.log(n);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]

// ---------------------

// Only change code below this line
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
// Only change code above this line
console.log(countdown(5)); // [  5 , 4 , 3 , 2 , 1]

// -----------------------------

/* 
 We have defined a function named rangeOfNumbers with two parameters.
 The function should return an array of integers which begins with a number 
 represented by the startNum parameter and ends with a number represented by
 the endNum parameter. The starting number will always be less than or equal 
 to the ending number. Your function must use recursion by calling itself and
 not use loops of any kind. It should also work for cases where both startNum 
 and endNum are the same.
 */

/* function rangeOfNumbers(startNum, endNum) {
  let arr = [];
  for (let index = startNum; index <= endNum; index++) {
    arr.push(index);
  }
  return arr;
} */

function rangeOfNumbers(startNum, endNum) {
  function countup(n) {
    if (n < startNum) {
      return [];
    } else {
      const countArray = countup(n - 1);
      //   console.log(n);
      countArray.push(n);
      return countArray;
    }
  }

  return countup(endNum);
}

console.log(rangeOfNumbers(1, 5)); //[1, 2, 3, 4, 5]
console.log(rangeOfNumbers(5, 9));
console.log(rangeOfNumbers(5, 5));
