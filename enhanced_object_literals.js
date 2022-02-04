let lastname = "Kostov";
lastname = "Krasimirov";
let age = 777;
let date = new Date();

let propertyName = 'country';
let propertyValue = 'Canada';

let person = {
    [propertyName]: propertyValue,
    lastname,
    age: 999,
    date: new Date(),
    normalFunction(){
        // .....
    },
    arrowFunction: () => {
        // .....
    }
}

console.log(person.age);
person.normalFunction();
person.arrowFunction();

console.log(person[propertyName]);

returnValueFromPerson = (prop) => person[prop];

console.log(returnValueFromPerson('lastname'));