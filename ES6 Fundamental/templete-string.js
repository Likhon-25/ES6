let name = "Likhon";
let price = 500;

let location = "Rangpur Sadar";
let quantity = 5;
let amount = 2500;
// let message = "Hello " + name + ". Your product price is " + price;
let message = `Hello ${name}, 
Your product price is ${price * quantity}
your paid amount is ${amount}`;

// console.log(message);


function admissionConfirmationMail(name, Amount, course){
    let message = `Hello ${name}
    Your admission is confirmed for ${course} course.
    Your paid amount is ${Amount}.
    Thank you for your admission`

    return message;
}

console.log(admissionConfirmationMail('Likhon', 5000, 'CSE'));
