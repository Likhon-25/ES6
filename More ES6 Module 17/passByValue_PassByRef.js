// Pass by value
let name = "Likhon";
let age = 20;
function myFunc(myName, myage) {
  myName = "likhon Mondol";
  myage = 18;
  console.log(myName, myage);
}

// myFunc(name, age);
// console.log(name, age);

// -----------------------------------


// Pass by reference
let student = {
  name: "Likhon",
  roll: 809643,
};

function myFunc2(data) {
    // data.name = 'Likhon Mondol'
    data = {name: "Tanjim Mondol", age: 8}
  console.log(data);
}
myFunc2(student);
console.log(student);
