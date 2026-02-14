/*what is  Keywords and Identifiers in JavaScript?*/

/*keywords are reserved words in JavaScript that have a specific meaning and cannot be used as identifiers (such as variable names, function names, etc.).
They are used to declare variables in JavaScript. 
Examples of keywords include var, let, const, if, else, for, while, function, return, etc.*/

var name = "John"; // 'var' is a keyword used to declare a variable
let message = "Welcome!"; // 'let' is a keyword used to declare a block-scoped variable
const pi = 3.14; // 'const' is a keyword used to declare a constant variable
let age = 25; // 'let' is a keyword used to declare a block-scoped variable

if (age > 18) { // 'if' is a keyword used for conditional statements
    console.log("You are an adult."); // 'console' and 'log' are not keywords, but part of the console object
   

}

/*variables are used to store data values. In JavaScript, you can declare variables using the keywords var, let, or const. 
Variables can hold different types of data, such as numbers, strings, objects, etc.
 The value of a variable can be changed (except for const variables) and can be accessed throughout the scope in which it is declared.*/

/*identifiers are the names given to variables, functions, classes, and other entities in JavaScript.
 They are used to identify and reference these entities in the code. 
 Identifiers must follow certain rules:
- They can only contain letters, digits, underscores (_), and dollar signs ($).
- They cannot start with a digit.
- They cannot be the same as JavaScript reserved keywords.
- They are case-sensitive (e.g., myVariable and myvariable are different identifiers).*/
 
var name = "John";
/*var → keyword
name → identifier
"John" → string value
Memory space created → variable/*



/*Example of var*/
var Username = "John";
console.log(Username); // Output: John

// Redeclaring var
var Username = "Doe";
console.log(Username); // Output: Doe

// Example of let
let month = 11;   
console.log(month); // Output: 11


// Redeclaring let (This will cause an error)
// let month = 30; // Uncaught SyntaxError: Identifier 'month' has already been declared

// Updating let
age = 30;
console.log(month); // Output: 308*/

