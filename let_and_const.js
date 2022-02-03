let firstName = 'Tom';
const lastName = 'Ford';
// lastName = 'Jones';

let age = 999;
let birthDate = new Date ();

let person = {
    firstName: 'Tom',
    lastName: 'Ford'
}

let duplicate = function(value) {
    return value*2;
}

const person2 = {
    firstName: 'Scott',
    lastName: 'West'
}

person2.firstName = 'Alex';

person2 = {

} // can't reassing a const

console.log(person2);