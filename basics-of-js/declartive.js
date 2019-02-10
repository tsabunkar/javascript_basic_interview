const response = [{
        name: 'Tejas',
        gender: 'male'
    },
    {
        name: 'dhoni',
        gender: 'male'
    },
    {
        name: 'kat',
        gender: 'female'
    },
    {
        name: 'sachin',
        gender: 'male'
    },
    {
        name: 'ash',
        gender: 'female'
    },

];

console.time('tag');

// DECLARATIVE WAY OF WRITING CODE -> Love (Functional way !!!)
// Declarative -> Functional -> Tell what to do 
const femaleUsers = response
    .filter(user => user.gender === 'female')
    .map(femaleUser => {
        return {
            ...femaleUser,
            name: 'Ms .' + femaleUser.name
        }
    });

console.log(femaleUsers);


console.timeEnd('tag');