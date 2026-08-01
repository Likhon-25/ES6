// Spread Operator
let numbers = [10, 20, 30.4, 50];
// console.log(...numbers);

let maxNumber = Math.max(...numbers);
// console.log(maxNumber);

let numbers2 = [...numbers];

numbers.push(1000);
// console.log(numbers2);

let students = {
  name: "Likhon",
  age: 20,
};

let students2 = { ...students, gpa: 3.5 };

students.dept = "CSE";

// console.log(students2);

// Rest Operator

function sum(a, b, c, d, e, ...restNumber) {
  console.log(restNumber, "restNumber");
  let sum = 0;
  for (number of restNumber) {
    sum += number;
  }
  return a + b + c + d + e + sum
}
console.log(sum(10, 20, 30, 40, 50, 60, 70, 80));
