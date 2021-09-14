/* ==================================== */
/* ===> мутирующие методы массивов <=== */
/* ===> изменяют исходный массив <===== */
/* ==================================== */

/* pop - удалит из массива последний элемент и вернет его */

// c помощью метода pop достань последний элемент массива numbersList1 и помести его в переменную lastNumber
// выведи в консоль эту переменную, а так же массив numbersList1 после выполнения pop

const numbersList1 = [1, 2, 3, 4, 5];
console.log(numbersList1);
numbersList1.pop();
const res = numbersList1.pop();
console.log(res);
console.log(numbersList1);

// put your code here

/* push - добавит элемент в конец массива */

// c помощью метода push добавь число 6 в конец массива numbersList2
// выведи в консоль результат работы метода push, а так же массив numbersList2 после выполнения push


const numbersList2 = [1, 2];
console.log('before push ', numbersList2);

const res2 = numbersList2.push(100);
console.log(res2);

console.log('after push ', numbersList2);

// put your code here

/* shift - удалит из массива первый элемент и вернет его */

// c помощью метода shift достань первый элемент массива numbersList3 и помести его в переменную firstNumber
// выведи в консоль эту переменную, а так же массив numbersList2 после выполнения shift

const numbersList3 = [1, 2, 3, 4, 5];



console.log('before shift ', numbersList3);
const res3 = numbersList3.shift(50);
console.log(res3);


console.log('after shift ', numbersList3);


// put your code here

/* unshift - добавит элемент в начало массива */

// c помощью метода unshift добавь число 0 в начало массива
// выведи в консоль результат работы метода unshift, а так же массив numbersList4 после выполнения unshift

const numbersList4 = [1, 2, 3, 4, 5];

// put your code here

console.log('before unshift ', numbersList4);
const res4 = numbersList4.unshift();
console.log(res4);


console.log('after unshift ', numbersList4);




//slice
//input:num, num(optional);
//output:array
// console.log('before slice ', numbersList4);

// const res4 = numbersList4.slice(2, 4);

// console.log(res4);

// console.log('after slice ', numbersList4);







/* ======================================= */
/* ===> НЕ мутирующие методы массивов <=== */
/* ===> НЕ изменяют исходный массив <===== */
/* ======================================= */

// начальный массив
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

/* метод filter */
/* const newArr = arr.filter(callback) - создает и возвращает новый отфильтрованный массив.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   в newArr попадут только те элементы arr, для которых callback(arr[i]) вернет true
   callback(arr[i]) === true -> элемент будет добавлен в финальный массив
   callback(arr[i]) === false -> элемент НЕ будет добавлен в финальный массив */

// c помощью метода filter создай новый массив bigNumbers, в котором будут числа > 5 из anotherNumbersList
// выведи bigNumbers в консоль

// put your code here
function sum(from, to, printer) {
    let sum = 0;
    for (let index = from; index <= to; index++) {
        sum += index;
    }
    printer(sum);
}

function printResult(res) {
    console.log(res);
}
sum(5, 8, printResult);




console.log('before filter ', anotherNumbersList);

anotherNumbersList.filter();

// console.log(res5);

console.log('after filter', anotherNumbersList);







// c помощью метода filter создай новый массив evenPositions, в котором будут числа из четных позиций которые > 5
// массива anotherNumbersList
// выведи evenPositions в консоль

// put your code here