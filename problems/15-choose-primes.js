/*
Write a function `choosePrimes(nums)` that takes in an array of numbers as args.
The function should return a new array containing the primes from the original
array.

A prime number is a number that is only divisible by 1 and itself.

Hint: consider creating a helper function to check if a number is prime!

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:



*/

let isPrime = function(num) {
    // Your code here
    if (num < 2) return false
    if (num === 2) return true
    if(num % 2 === 0) return false

    for(let i = 3 ; i < num; i++){
     if(num % i === 0) return false
    }
    
    return true

}

let choosePrimes = function(nums) {
    // Your code here
    let array = []
     nums.filter((ele) => {
        if(isPrime(ele) === true) array.push(ele)

     })
     return array
}
console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]

// alternative solution using Array.filter
// let choosePrimes = function(nums) {
//     return nums.filter(isPrime);
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = choosePrimes;
} catch (e) {
    module.exports = null;
}
