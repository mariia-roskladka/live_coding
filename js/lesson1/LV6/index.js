//Prime numbers
//input: num
//output:num
// function getPrimes(num) {
//     for (let index = 2; index <= num; index += 1) {
//         console.log('checking if ' + index + ' is prime');
//         let isPrime = true;
//         for (let number = 2; number < index; number++) {
//             console.log('checking if num % index' + number + ' ' + index);

//             if (index % number === 0) {
//                 console.log('number is not prime:' + index);

//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             console.log(index);
//         }
//     }
// }

const isPrime = number => {
    for (let index = 2; index <= num; index += 1) {
        if (index % number === 0) {
            return false;
        }
    }
    return true;
}

function getPrimes(num) {
    for (let index = 2; index <= num; index += 1) {
        if (isPrime) {
            console.log(index);
        }
    }
}
//test data
getPrimes(10);