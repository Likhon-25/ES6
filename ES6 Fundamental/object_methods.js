const user = {
  name: "Likhon",
  age: 20,
  dept: "CSE",
};

const keys = Object.keys(user);
const values = Object.values(user);
const entries = Object.entries(user);
// console.log(entries);

// delete method
// delete user.age;
// console.log(user);

// Seal method
const bankAccount = {
  accountNumber: 123456789,
  balance: 5000,
};
//seal Method
Object.seal(bankAccount);
delete bankAccount.balance;
bankAccount.nomineeName = "likhonnn";
bankAccount.balance = 10000;
console.log(bankAccount);

// Freex method
Object.freeze(bankAccount);
delete bankAccount.balance;
bankAccount.nomineeName = "likhonnn";
bankAccount.balance = 50000;
console.log(bankAccount);

console.log(Math.ceil(4, 9));
