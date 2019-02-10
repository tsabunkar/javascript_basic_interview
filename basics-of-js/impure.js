let booksResponses = [{
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
        name: 'Digital ',
        genere: 'scifi',
        author: 'Dan brown'
    },
    {
        name: 'alchemist',
        genere: 'journey',
        author: 'suchi'
    },
]

function modifiyBooks(booksResponses) {
    booksResponses.splice(0, 2);
    // booksResponses.splice(3, 1);
}

modifiyBooks(booksResponses);


console.log(booksResponses);








// slice() method returns a shallow copy of a portion of an array into a new array object