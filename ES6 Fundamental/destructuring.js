// Destructuring for array
const numbers = [10, 20, 30, 40, 50];

// const ten = numbers[0];
const [ten, twenty, , , fifty] = numbers;

// console.log(ten, twenty, fifty);

// Destructuring for object
const student = {
  name: "Likhon",
  age: 20,
  dept: "CSE",
  marks:{
    Java: 55,
    Data:58,
    Web: 25,
    Microprocessor: 65
  }
};

// const name = student.name;
// console.log(name);

// const {age, name } = student;
// console.log(age, name);

const {age, name:fullName, marks: {Microprocessor} } = student;
console.log(age, fullName);


console.log(age, fullName,  Microprocessor);
