// default_parameters_and_spread_rest

/*
Problem 3: Flexible Total Calculator
claculateTotal(...prices) using rest params, sums any number of prices, 

Example: claculateTotal(0, 100, 200, 300) -> 600
Example: claculateTotal(10, 100, 200) -> 270 (10 = duscount)
*/

// Simple discount is ALWAYS the first argument.

function claculateToatal(discount = 5, ...prices) {
  // let toatal = 0;
  // for(let i = 0; i < prices.length; i++){
  //     toatal += prices[i]
  // }
  let total = prices.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  let discountAmount = (total * discount) / 100;
  console.log(discountAmount);
  let totalAfterDiscountApply = total - discountAmount;
  console.log("After Discount Price", totalAfterDiscountApply);
  return totalAfterDiscountApply;
}

console.log(claculateToatal(undefined, 100, 200, 300));


/*
Marge & Deduplicate arrays
merge two arrays and remove duplicates usign spread + set.
*/

let arr1 = [10,20,30,40,50]