/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:


*/

let hasThreeVowels = function(string) {
    // Your code here
    let count = 1
    let vowel = "AEIOUaeiou"
    let words = string.split("")
    let vArr = words.filter((letter) => {
        if(vowel.includes(letter)) return letter
    })
    vArr.reduce((v1,v2) => {
        if(v1 !== v2 ) count++
    })
    if(count >= 3 ) return true
    return false
};


console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false
// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
