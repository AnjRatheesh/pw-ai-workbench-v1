/* Type Operators are used to determine the type of a variable or value in JavaScript.Here are some common type operators: */

/* 1. typeof: Returns a string indicating the type of the operand. */
/* Example: */
let x = 5;
console.log(typeof x); // Output: "number"  
/* 2. instanceof: Checks if an object is an instance of a specific class or constructor function. */
/* Example: */
let arr = [1, 2, 3];
console.log(arr instanceof Array); // Output: true
/* 3. Array.isArray: Checks if a value is an array. */
/* Example: */
let myArray = [1, 2, 3];
console.log(Array.isArray(myArray)); // Output: true
/* 4. constructor: Returns a reference to the constructor function that created the instance object. */
/* Example: */
let str = "Hello";
console.log(str.constructor); // Output: function String() { [native code] }
/* 5. Object.prototype.toString: Returns a string representing the object type. */
/* Example: */
let numbers = [1, 2, 3];
console.log(Object.prototype.toString.call(numbers)); // Output: "[object Array]"
/* 6. instanceof: Checks if an object is an instance of a specific class or constructor function. */
/* Example: */
let date = new Date();
console.log(date instanceof Date); // Output: true  
/* 7. typeof null: Returns "object" for null values, which is a known quirk in JavaScript. */
/* Example: */
let nullValue = null;
console.log(typeof nullValue); // Output: "object"
/* 8. typeof undefined: Returns "undefined" for undefined values. */
/* Example: */
let undefinedVar;
console.log(typeof undefinedVar); // Output: "undefined"
/* 9. typeof function: Returns "function" for function values. */
/* Example: */
function greetUser() {
    return "Hello";
}
console.log(typeof greetUser); // Output: "function"
/* 10. typeof Symbol: Returns "symbol" for symbol values. */
/* Example: */
let sym = Symbol("mySymbol");
console.log(typeof sym); // Output: "symbol"   
/* 11. typeof BigInt: Returns "bigint" for BigInt values. */
/* Example: */
let bigIntValue = 123456789012345678901234567890n;
console.log(typeof bigIntValue); // Output: "bigint"





