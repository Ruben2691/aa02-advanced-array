/*
Write a function `shortestWord` that accepts a sentence as an argument.
The function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:



*/

// let shortestWord = function(sentence) {
//   let words = sentence.split(' ')
//   return words.reduce((word, word1) => {
//     if(word1.length > word.length) {
//       return word
//     }else{
//       return word1
//     }
//   })
// };

// let shortestWord = function(sentence) {
//   let words = sentence.split(' ')
//   let word = words[0]
//   words.filter((ele) => ele.length <= word.length ? word = ele : false)
//   return word
// };

let shortestWord = function(sentence) {
  let words = sentence.split(' ')
  let word = words[0]
  words.filter((ele) => {
    if(ele.length <= word.length ) word = ele
  })
  return word
};

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = shortestWord;
} catch (e) {
  module.exports = null;
}
