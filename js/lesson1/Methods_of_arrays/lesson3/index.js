// input: array, func
// output:arr

//callback:
//input:element, index, array
//output:boolean
const filterArrayElements = (arr, callback) => {
    const res = [];

    for (let index = 0; index < arr.length; index += 1) {
        if (callback(arr[index], index, array)) {
            res.push(arr[index]);
        }
    }
    return res;
};

//test
const array = [10, 5, -2, 8, 7, 16, 28];
const func = el => el > 7;
// const func = (el, index, arr) => {
//     console.log(`el:${el}, index:${index}, arr:${arr}`);
//     if (el > 7) {
//         return true;
//     } else {
//         return false;
//     }
// };
console.log(filterArrayElements(array, func));

//test2

const array = [10, 5, -5, 8];
const func = (el, index, arr) => {
    if (arr.length < 5) {
        return true;
    }
    return el > 7;
}
console.log(filterArrayElements(array, func));