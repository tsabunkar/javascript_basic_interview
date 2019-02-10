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
// IMPERATIVE WAY OF WRITING CODE -> 
// Imperative -> old school  -> Tell what to do & how to do
const femaleUsers = [];

for (let index = 0; index < response.length; index++) {
    if (response[index].gender === 'female') {
        response[index].name = 'Ms .' + response[index].name;
        femaleUsers.push(response[index]);
    }

}
console.log(femaleUsers);

console.timeEnd('tag');