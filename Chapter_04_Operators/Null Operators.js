/* Null operators are used to handle null or undefined values in JavaScript. They provide a way to assign default values or check for the presence of a value before performing operations. Here are some common null operators in JavaScript: */

/* 1. Nullish Coalescing Operator (??): Returns the right-hand operand when the left-hand operand is null or undefined, otherwise returns the left-hand operand. */
/* Example: */
let value = null;
let defaultValue = "Default";
let result = value ?? defaultValue; // result is "Default"


/* 2. Optional Chaining Operator (?.): Allows you to access properties of an object without having to check if the object is null or undefined. If the object is null or undefined, it returns undefined instead of throwing an error. */
/* Example: */
let person = {
    name: "Alice",
    address: {
        city: "New York"
    }
};
console.log(person?.address?.city); // Output: "New York"
console.log(person?.contact?.phone); // Output: undefined       
/* 3. Nullish Assignment Operator (??=): Assigns the right-hand operand to the left-hand operand only if the left-hand operand is null or undefined. */
/* Example: */
let assignValue = null;

assignValue ??= "Default"; // assignValue is now "Default"
assignValue ??= "Another Value"; // assignValue remains "Default" because it is not null or undefined



