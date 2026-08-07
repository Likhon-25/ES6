let array = [2, 4, 6, 8, 10];

// let double = []
// for(let i = 0; i < array.length; i++){
//     double.push(array[i]*2)
// }

// console.log(array);
// console.log(double);

const double = array.map((elem) => {
  //   console.log(elem);
  return elem * 2;
});

console.log(double);
