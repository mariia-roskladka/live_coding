// начальный массив
const numbersList = [5, 0, 8, 10, -4, 50, 220];

/* метод map */
//input: func, obj
// output: new array


//callback
// input (element, index, array)
// output number
/* const newArr = arr.map(callback) - создает и возвращает новый массив. Длина нового и исходного массивов равны
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   элементы массива newArr - это результат вызова callback для каждого элемента arr
   newArr[i] = callback(arr[i]) */
// c помощью метода map создай новый массив squaredNumbers, в котором будут квадраты чисел из numbersList
// выведи squaredNumbers в консоль



console.log('Number list before map: ', numbersList);
// 1
// const mapRes = numbersList.map(el => el * el);
// // 2

const mapRes = numbersList.map(function(el, index, array) {
    console.log(el);
    console.log(index);
    console.log(array);
    return el * el;
});
console.log(mapRes);
console.log('Number list after map: ', numbersList);




/* метод find */

//FIND
//input:callback
//output: num/undef

//callback
// input (element, index, array)
// output bool

/* const arrElement = arr.find(callback) - вернет первый элемент массива arr, который удовлетворяет условию в callback.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr 
   если callback(arr[i]) вернет true, то find прекратит поиск и вернет этот элемент */

// c помощью метода find найди первое нечетное число в numbersList и выведи его в консоль


console.log('Number list before find: ', numbersList);


// const findRes = numbersList.find((el) => {
//     if (el % 2 === 0 && el > 0) {
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(findRes);


const findRes = numbersList.find(el => el % 2 === 0 && el > 0);
console.log(findRes);

console.log('Number list after find: ', numbersList);







/* метод forEach */

//input: num, el
// output: undefined


//callback
// input (element, index, array)
// output undef

/* arr.forEach(callback) - итерирует массив и выполняет callback функцию по очереди для каждого элемента 
начального массива arr. callback функция ничего не должна возвращать */
// c помощью метода forEach выведи в консоль только положителные элементы массива numbersList


// numbersList.forEach((el) => {
//     if (el > 0) {
//         console.log(el)
//     }
// });
console.log('Number list before forEach: ', numbersList);


const forEachRes = numbersList.forEach((el) => {
    if (el > 0) {
        console.log(el)
    }
});
console.log(forEachRes);
console.log('Number list after forEach: ', numbersList);











/* метод reduce */
//input:callback
//output: num

//callback
// input num, index, arr
// output num

/* const newArr = arr.reduce(callback) - применяет функцию callback к каждому элементу массива (слева-направо), 
возвращая одно результирующее значение. Функция callback принимает два параметра - accumulator, currentValue */

// С помощью метода reduce посчитай сумму чисел массива transactions которые больше 100
// выведи в консоль результат выполнения, а так же массив transactions после выполнения reduce

transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];
console.log('Number list before reduce: ', transactions);


const reduceRes = transactions.reduce((acc, el, index) => {
    console.log('step:' + index + ', acc is:' + acc + ', el:' + el);
    acc += el;
    return acc;
});
console.log(reduceRes);
console.log('Number list after reduce: ', transactions);





















/* sort - отсортирует массив в заданом порядке */

// c помощью метода sort отсортируй массив numbersList1 по убыванию, результат помести в переменную sortedArr1
// выведи в консоль sortedArr1, а так же массив numbersList1 после выполнения sort

const numbersList1 = [6, 20, 33, 43, 8];

// put your code here

// c помощью метода sort отсортируй массив numbersList2 по убыванию, но чтобы исходный массив не менялся.
// результат помести в переменную sortedArr2
// выведи в консоль sortedArr2, а так же массив numbersList2 после выполнения sort

const numbersList2 = [6, 20, 33, 43, 8];

// put your code here