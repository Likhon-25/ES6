/*
Problem 1: Fix the Scope Bug
Rewrite using let to fix the output.
*/

let status = "Order Placed";
for (let i = 1; i <= 3; i++) {
  let status = "Processing Item" + i;
  console.log(status);
}
console.log("Final Status:", status);


