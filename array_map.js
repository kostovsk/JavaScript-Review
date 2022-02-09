// example 1
const numbers = [1,2,3,4,5];
const squares = numbers.map(value => value*value);
// console.log(squares);

// example 2
const people = [
    {id: 1, name: 'Stoycho', country: 'BG'},
    {id: 2, name: 'Scott', country: 'USA'},
    {id: 3, name: 'Jim', country: 'Canada'}
]

const id = people.map(person => person.id);
// console.log(id);

// example 3

const divs = numbers.map(number => `<div>${number}</div>`);
console.log(divs);