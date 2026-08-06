/*
Receipt Generator (template strings)
Build a receipt generator using template strings - take item name,
price qty as input , output formatted multiline recept.

Example : Input ('Pen', 20, 3) -> Output "Pen x3 = 60 Taka"
*/

function receipipGenerator(name, price, qty) {
  console.log(name, price, qty);
//   return name + " x" + qty + "=" + price + "taka";

  return `${name} x${qty} = ${price * qty} Taka`;
}

receipipGenerator("Pen", 20, 3);
