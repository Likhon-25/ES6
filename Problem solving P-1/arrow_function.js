/* Problem 1: Arrow Function with default parameters & logic write and arrow function that calculats shipping cost basedon order amount. Free shipping if amount >= 1000, otherwise charge a default fee 60 taka.

Example: calulateShipping(1200) -> free shipping
Example: calulateShipping(500) -> shipping fee: 60 taka
Example:calulateShipping(500, 100) -> shipping fee : 100 taka
*/

const calculateShipping = (orderAmount, shippingFee = 60) => {
    // if(orderAmount >= 1000){
    //     return "Free Shipping"
    // } else{
    //     return `Shipping Fee : ${shippingFee} Taka`
    // }
    // condition ? ture : false
    return orderAmount >= 1000 ? "Free Shipping" : `Shipping Fee ${shippingFee} Taka`
};
// console.log(calculateShipping(1200));
// console.log(calculateShipping(500));
// console.log(calculateShipping(500, 100));


// ---------------------------------------------------------

/* Problem 2: Arrow Function with Multiple Conditions
Write an arrow functin that assigns a grade based on marks.
90+ -> "A+", 80-89 => "A", 60-79 -> "B", below 60 -> "Fail"

Example : getGrade(95) -> "A+"
Example : getGrade(82) -> "A"
Example : getGrade(45) -> "F"
*/

const getGrade = (mark) =>{
    // if(typeof mark != 'number'){
    //     return 'invalid'
    // }
    // if(mark >= 90){
    //     return 'A+';
    // } else if(mark >= 80){
    //     return 'A'
    // } else if(mark >= 60){
    //     return 'B+'
    // } else {
    //     return 'Fail'
    // }
    

    // Nested Ternary Operator
    return typeof mark != 'number' ? 'Invalid' : mark >= 90 ? "A+" : mark >= 80 ? "A" : mark >= 60 ? "B+" : "Fail"
}
console.log(getGrade(95));
console.log(getGrade(82));
console.log(getGrade('sd'));
console.log(getGrade(0));