//1 get key age
// 2 sort based on this value
// 4 change obj to array

// input: object
// output: array of objects

// function getCustomersList(obj) {
//     // input callback
//     // output array

//     // input: object
//     //output: object
//     const res = Object.entries(obj).map((arr) => {
//         // console.log(arr);

//         let obj = { id: arr[0] };

//         console.log(obj);

//         let value = arr[1];
//         obj = {...obj, ...value };

//         console.log(obj);

//         return obj;
//     });
//     console.log(res);
//     return res;
// }
function getCustomersList(obj) {
    // input callback
    // output array

    // input: object
    //output: object
    return Object.entries(obj)
        .map(([id, customer]) => ({ id, ...customer }))
        .sort((a, b) => a.age - b.age)

}

// test data

const customer = {
    "id-user-2": {
        name: "Tom",
        age: 17,
    },
    "id-user-1": {
        name: "Bob",
        age: 19,
    },
};

getCustomersList(customer);
console.log(getCustomersList(customer));