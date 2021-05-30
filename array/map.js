// Implement custom Array.prototype.map method

const myMap = (arr, callback) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  const newArr = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    const cbValue = callback(element, index, arr);
    newArr.push(cbValue);
  }
  return arr;
};

console.log(myMap([1, 2, 3, 4], (ele) => ele * 2));
