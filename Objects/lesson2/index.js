// input string [], arr
// output obj
// algo
// reduce
// 1.
// algo
// 1.create res obj
// 2 iterate keysList
// 3 get value by index
// 4 add key - value to the object
/*
function buildObject(keysList, valuesList) {
  const obj = {};
  
  for (let index = 0; index < keysList.lenght; index++) {
    const key = keysList[index];
    const value = valuesList[index];

    Object.assign(obj, {
      [key]: value,
    });
}
  return obj;
}
*/

function buildObject(keysList, valuesList) {

    return keysList.reduce((obj, key, index) => {
        const value = valuesList[index];
        return {...obj, [key]: value }
    }, {});
}

// const buildObject = (keysList, valuesList) =>
//     keysList.reduce((obj, key, index) => ({...obj, [key]: valuesList[index] }), {});


// examples
const keys = ['name', 'address', 'age', 'run'];
const values = [
    'Bob',
    'Ukraine',
    34,
    () => {
        console.log('run');
    },
];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }
console.log(result);

result.run();