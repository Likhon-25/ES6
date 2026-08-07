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
console.log(calculateShipping(1200));
console.log(calculateShipping(500));
console.log(calculateShipping(500, 100));