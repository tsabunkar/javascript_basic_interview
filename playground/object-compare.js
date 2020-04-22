let {
  data1,
  data2,
  filter1,
  filter2,
  filter3,
  filter4,
  filter5,
} = require('./data');

// !Exact Functionality
let filterPredicate = () => {
  //  return callback func
  const compareObject = (data, filter) => {
    let isMatchFound = true;
    for (const key in filter) {
      if (filter.hasOwnProperty(key) && data.hasOwnProperty(key)) {
        if (filter[key] !== data[key]) {
          console.log(filter[key], ' ', data[key]);
          isMatchFound = false;
          break;
        }
      } else {
        console.log('else', filter[key], ' ', data[key]);
        isMatchFound = false;
        break;
      }
    }
    return isMatchFound;
  };
  return compareObject;
};

// console.log(filterPredicate()(data1, filter1));
// console.log(filterPredicate()(data1, filter2));
// console.log(filterPredicate()(data1, filter3));
// console.log(filterPredicate()(data2, filter3));

// *---------------------------------------------------------------------------------

// !Contains Functionality
let filterPredicate2 = () => {
  //  return callback func
  const compareObject = (data, filter) => {
    let isMatchFound = true;
    for (const key in filter) {
      if (filter.hasOwnProperty(key) && data.hasOwnProperty(key)) {
        if (
          data[key]
            .toString()
            .trim()
            .toLowerCase()
            .indexOf(filter[key].toString().trim().toLowerCase()) === -1
        ) {
          console.log(filter[key], ' ', data[key]);
          isMatchFound = false;
          break;
        }
      } else {
        console.log('else', filter[key], ' ', data[key]);
        isMatchFound = false;
        break;
      }
    }
    return isMatchFound;
  };
  return compareObject;
};

// console.log(filterPredicate2()(data1, filter1));
// console.log(filterPredicate2()(data1, filter2));
// console.log(filterPredicate2()(data1, filter3));
// console.log(filterPredicate2()(data2, filter3));
// console.log(filterPredicate2()(data1, filter4));

// *---------------------------------------------------------------------------------

// !NotContains Functionality
let filterPredicate3 = () => {
  //  return callback func
  const compareObject = (data, filter) => {
    let isMatchFound = true;
    for (const key in filter) {
      if (filter.hasOwnProperty(key) && data.hasOwnProperty(key)) {
        if (
          data[key]
            .toString()
            .trim()
            .toLowerCase()
            .indexOf(filter[key].toString().trim().toLowerCase()) >= 0
        ) {
          console.log(filter[key], ' ', data[key]);
          isMatchFound = false;
          break;
        }
      } else {
        console.log('else', filter[key], ' ', data[key]);
        isMatchFound = false;
        break;
      }
    }
    return isMatchFound;
  };
  return compareObject;
};

// console.log(filterPredicate3()(data1, filter1));
// console.log(filterPredicate3()(data1, filter2));
// console.log(filterPredicate3()(data1, filter3));
// console.log(filterPredicate3()(data2, filter3));
// console.log(filterPredicate3()(data1, filter4));
console.log(filterPredicate3()(data1, filter5));
