// 'use strict'
//bind

//input:context, arg
//output:function


function printMessage(country, city) {
    console.log(this);

    console.log(`Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`);
}

const user = {
    firstName: 'Andrey',
    age: 111,
    tempFunc: 'some secret data',
};
// console.dir(printMessage);
// console.log(user);


// // option 1
// // const printMessageBinded = printMessage.bind(user);
// // printMessageBinded('Ukraine', 'Kyiv');

// printMessage.bind(user)('Ukraine', 'Kyiv');

// // option 2
// const printMessageBinded2 = printMessage.bind(user, 'Ukraine', 'Sumy');
// printMessageBinded2();

// // option 3
// const printMessageBinded3 = printMessage.bind(user, 'Ukraine');
// printMessageBinded3('Poltava');



//----------------------------------

//input:func, context, args...
//output:func
function myBind(func, context, ...args) {
    //call
    //input: context, args
    //output: func result


    //input: the same as func
    //output: func result
    return function(...funcArgs) {
        func.call(context, ...args, ...funcArgs);
    };
}

//test data
const bindedFunc = myBind(printMessage, user)
bindedFunc('UK', 'London');