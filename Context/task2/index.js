'use strict'

function printMessage(country, city) {
    console.log(this);

    console.log(`Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`);
}

const user = {
    firstName: 'Andrey',
    age: 111,
    tempFunc: 'some secret data',
};