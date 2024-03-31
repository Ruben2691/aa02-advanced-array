/*
Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:



*/

let removeLastVowel = function(word) {
    let vowel = 'aeiouAEIOU'
    let index;
    for(let i = word.length -1; i >= 0; i--){
        let letter = word[i]
        if(vowel.includes(letter)){
            index = i
            break;
        }
    }
    return word.slice(0, index).concat(word.slice(index + 1))
};

let hipsterfy = function(sentence) {
   let word = sentence.split(' ')
   return word.map((word) => removeLastVowel(word)).join(' ')

};

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
