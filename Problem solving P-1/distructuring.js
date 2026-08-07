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
console.log(responseExtractor({ user: { name: "Likhon", age: 20 } }));
console.log(responseExtractor({ user: { name: "Tanjim" } }));
