/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */


//input:obj,string
//output:obj
function addPropertyV1(obj, key, value) {
    obj[key] = value;
    return obj;
}
// test data
const transaction = {
    value: 170,
};
console.log(addPropertyV1(transaction, 'currency', 'USD'));
console.log(transaction);















//input:obj,string
//output:obj
function addPropertyV2(obj, key, value) {
    //input:target(object), source(obj)
    //output:object
    return Object.assign(obj, {
        [key]: value
    });

}
// test data
const transaction2 = {
    value: 170,
};
console.log(addPropertyV2(transaction2, 'currency', 'USD'));
console.log(transaction2);












//input:obj,string
//output:obj
function addPropertyV3(obj, key, value) {
    return Object.assign({}, obj, {
        [key]: value
    });
}
// test data
const transaction3 = {
    value: 170,
};
console.log(addPropertyV3(transaction3, 'currency', 'USD'));
console.log(addPropertyV3(transaction3, 'country', 'Ukraine'));
console.log(transaction3);







//input:obj,string
//output:obj
function addPropertyV4(obj, key, value) {
    return {...obj, [key]: value };
}
// test data
const transaction4 = {
    value: 170,
};
console.log(addPropertyV4(transaction4, 'currency', 'USD'));
console.log(addPropertyV4(transaction4, 'country', 'Ukraine'));

transaction4.city = 'Kyiv';
console.log(transaction4);

const transactionCopy = {...transaction4 };
console.log(transaction4);
//spread operator
const numbers = [10, 11, 18, 7, 0];
console.log(numbers);
console.log(...numbers);

const numbersCopy = [...numbers, 1111, 2222];
console.log(numbersCopy);



//rest
function sum(param1, ...params) {
    console.log(param1);
    console.log(params);


    return params.reduce((acc, el) => {
        acc += el;
        return acc;
    });
}
//test data
sum(1, 2, 5, 8);

const numberRest = [10, 11, 18, 7, 0];
// const [firstEl, ...restArr]=