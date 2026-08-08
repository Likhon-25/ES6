/*
Most Expensive Product
Given an object of product prices, use object.keys() or object.entries() + LOOP to find the most expensive product.

Example:{pen: 20, book: 150,bag: 500} --> "bag"
*/
const getMostExpensiveProduct = (product) =>{
    console.log(product);
}
console.log(getMostExpensiveProduct({pen: 20, book: 150,bag: 500}));

// ---------------------------------------------------

/*
Problem 2: Safe Nested Access
Safely access deeply nested optional data using ? and  ?? without throwing errors.


Example: User? address? city ?? "City not found when address is undefined"
*/