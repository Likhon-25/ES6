/*
Proble 1: Nested Response Extractor
Extract Specific fields from a nested API - like response object using destructuring, with renamming + default value.

Example: {user: {name: "Likhon", age: 20}} -> extract name as userName ,  default age = 18 if missing
*/

const responseExtractor = (obj) => {
  const {
    user: { name: userName, age = 18 },
  } = obj;
  return {
    userName,
    age,
  };
};
// console.log(responseExtractor({ user: { name: "Likhon", age: 20 } }));
// console.log(responseExtractor({ user: { name: "Tanjim" } }));

//  ------------------------------------------------------

/*
Problem 2 : Swap $Rest Extractor
Swap two variables and extract first / rest elements form on array using destructuring , no temp variable
*/

let a = 5;
let b = 10;

[b, a] = [a, b];
// console.log(a,b);

// -------------

let nums = [1,2,3,4,5,9,10]
let [first, ...rest] = nums;
console.log(first, rest);



