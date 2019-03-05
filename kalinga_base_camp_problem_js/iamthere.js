function iAmThere(word, replacer) {
    if (word.includes(replacer)) {
        // word.replace(replacer, '&');
        let mainpulatedByReplacer = replaceAll(word, replacer, '&');
        console.log(mainpulatedByReplacer);

        let replacedByPlus = mainpulatedByReplacer.replace(/[a-z]/g, '+');
        console.log(replacedByPlus);

        // let result = replacedByPlus.replace('&', replacer);
        let result = replaceAll(replacedByPlus, '&', replacer);
        console.log(result);

    } else {
        console.log('Please enter valid input');
    }
}

// function iAmThere(word, replacer) {
//     if (word.includes(replacer)) {
//         let mainpulatedByReplacer = replaceAll(word, replacer, '&');
//         let replacedByPlus = mainpulatedByReplacer.replace(/[a-z]/g, '+');
//         let result = replaceAll(replacedByPlus, '&', replacer);
//         console.log(result);

//     } else {
//         console.log('Please enter valid input');
//     }
// }

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

iAmThere('sachin', 'ch')