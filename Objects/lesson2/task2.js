// input-obj,obj
// output- boolean
// 1. compare if  number keys in obj1 !== number keys in obj2=>false
//2. collect keys to arr
// 3 iterate  in obj1  and compare keys:values obj1 with keys:values obj1
// 3.1 if (obj1[key] !== obj2[key]) return false

// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   if (keys1.length !== keys2.length) return false;

//   for (let i = 0; i < keys1.length; i++) {
//     const key = keys1[i];
//     // const key2 = keys2[i];

//     const value1 = obj1[key];
//     const value2 = obj2[key];

//     if (value1 !== value2) return false;
//   }
//   return true;
// }

function compareObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    return !keys1.some((key) => obj1[key] !== obj2[key]);

    // for (let i = 0; i < keys1.length; i++) {
    //   const key = keys1[i];
    //   // const key2 = keys2[i];

    //   const value1 = obj1[key];
    //   const value2 = obj2[key];

    //   if (value1 !== value2) return false;
    // }
    // return true;
}

// test data

const obj1 = {
    name: "Tom",
    age: 17,
    city: "Kiev",
};

const obj2 = {
    name: "Tom",
    age: 17,
    city: "Kiev",
};

console.log(compareObjects(obj1, obj2));