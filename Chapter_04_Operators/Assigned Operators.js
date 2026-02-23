/*Assigned Operators are a shorthand way to perform an operation and assignment in one step. 
 They combine an arithmetic operation with the assignment operator. Here are some common assigned operators in JavaScript:

1. += (Addition Assignment): Adds the right operand to the left operand and assigns the result to the left operand.
   Example: 
   let x = 5;
   x += 3; // x is now 8            

   */

const { log } = require("node:console");

let a = 10, b = 3;
console.log(a);
console.log(b);

// Arithmetic Operators
let sum = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;
// Shift + Option + Down - Mac
// Shift + Alt + Down - windows

console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);

// -------
console.log(a % b); // Modulus operaor - it gives -> Remainder
console.log(13 % 7);

console.log(100 % 2);
console.log(101 % 2);
console.log(103 % 2);

//  n%2 == 1 - odd number, [ n%2 == 0 , even]

console.log(2 ** 3); // exponetial a^b
console.log(a ** b); // exponetial a^b 10^3

// Increment and Decrement Operators
// a++, b-- (learn about the, one more class)
let firstname = "Pramod";