const CHAIR_DATA = require('./test.json');
let chairDetails = JSON.stringify(CHAIR_DATA);
console.log(chairDetails[0].charId);
let result = JSON.parse(chairDetails)
console.log(result[0].charId);