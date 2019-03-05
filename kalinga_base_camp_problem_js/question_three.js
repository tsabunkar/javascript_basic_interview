// let input = 'aAbcccccaaA';
let input = 'BBBBbbb';

// !   (.)\1* will match a single non-line-break character and
//!    check if that is followed by the same character any number of times
//!    m here is the complete match 
//!    $1 is the first chaptured group value i.e. the character.

let result = input.toLowerCase().replace(/(.)\1*/g, (m, $1) => {
    return $1 + m.length;
});

console.log(result);