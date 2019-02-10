let booksResponse = [{
        name: 'Infero',
        genere: 'mystery',
        author: 'Dan brown'
    },
    {
        name: 'The Notebook',
        genere: 'mystery',
        author: 'Spark'
    },
    {
        name: 'Digital fortress',
        genere: 'scifi',
        author: 'Dan brown'
    },
    {
        name: 'alchemist',
        genere: 'journey',
        author: 'suchi'
    },
]

function modifiyBooks(array) {
     array.slice(0, 2);
}

// console.log(modifiyBooks(booksResponse));
 modifiyBooks(booksResponse)

console.log('---------');

console.log(booksResponse);








// slice() method returns a shallow copy of a portion of an array into a new array object