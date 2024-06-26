/*
Write a function `unique` that accepts an array as an argument. The function
should return a new array containing elements of the input array, without
duplicates.
Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.
Examples:

*/

let unique = function(array) {
    // Your code here
    let arr = []
    array.filter((ele)=>{
        if(!arr.includes(ele)){

            arr.push(ele)
        }
    })
    return arr
};

// let unique = function(array) {
//     let newArr = array.sort()
//     // console.log(newArr)
//     let arr = []
//     newArr.filter((ele)=>{
//         if(arr[arr.length -1] !== ele){

//             arr.push(ele)
//         }
//     })
//     return arr
// };


// let unique = function(array) {
//     // Your code here
//     let arr = []
//     array.filter((ele)=>{
//         if(arr.includes(ele) === false){

//             arr.push(ele)
//         }
//     })
//     return arr
// };


console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = unique;
} catch (e) {
    module.exports = null;
}
