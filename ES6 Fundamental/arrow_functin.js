function sayGreet(name) {
  let message = `Hello ${name}`;
}

// Arry Function
// const sayGreet = (name) =>{
//     return "something"
// }

// --------------------------------------------------------------------
// single line statement
// const sayGreet = (name) => `Hello ${name} Assalamulaikum`;

// --------------------------------------------------------------------

// multiline statement
const multiple = (a, b) => {
  const sum = a + b;
  const multiple = sum * 5;
  return multiple;
};

// console.log(sayGreet("likhon"));
// console.log(multiple(4, 5));

const student = {
  name: "Likhon",
  age: 20,
  showName: function () {
    // return student.name;
    return `Name: ${this.name}. Age: ${this.age}`;
  },
};
console.log(student.showName());
