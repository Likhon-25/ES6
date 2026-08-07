const fruits = ["apple", "Mango", "banana", "orange", "Grape"];

const sliced = fruits.slice(1,4)
// console.log(sliced);


// Reduce
let nums = [12,34,56,78,90]
let sum = nums.reduce((accumulator, elem, ind, arr) => {

    console.log(accumulator, elem, ind, arr);

    return accumulator + elem
}, 0)
console.log(sum);