===============================

KEYWORDS-- are reserved words in JavaScript that have a specific meaning and cannot be used as identifiers (such as variable names, function names, etc.).
They are used to declare variables in JavaScript. 
Examples of keywords include var, let, const, if, else, for, while, function, return, etc


===============================
VAR NOTES
===============================

Definition:
var is a keyword used to declare a variable.
It is function-scoped and can be reassigned.

Example:

var age = 25;
var name = "John";

Rules:

1. Can be reassigned
   var age = 25;
   age = 30;   // ✅ Allowed

2. Can be redeclared
   var age = 25;
   var age = 40;   // ✅ Allowed

3. Function scoped (not block scoped)

   if (true) {
       var x = 10;
   }

   console.log(x);  // ✅ Accessible outside block

4. Hoisted (moved to top internally, initialized as undefined)

   console.log(a);  // undefined
   var a = 5;


--------------------------------------------------

===============================
LET NOTES
===============================

Definition:
let is a keyword used to declare a block-scoped variable.
It can be reassigned but cannot be redeclared in the same scope.

Example:

let age = 25;
let city = "Delhi";

Rules:

1. Can be reassigned
   let age = 25;
   age = 30;   // ✅ Allowed

2. Cannot be redeclared in same scope
   let age = 25;
   let age = 40;   // ❌ Error

3. Block scoped

   if (true) {
       let x = 10;
   }

   console.log(x);  // ❌ Error (not accessible)

4. Hoisted but not initialized
   Accessing before declaration gives error

   console.log(a);  // ❌ ReferenceError
   let a = 5;


--------------------------------------------------
Best Practice:
Use "let" instead of "var" in modern JavaScript.



===============================
CONST NOTES
===============================

3) CONST
--------

Definition:
const is a keyword used to declare a block-scoped variable
whose value cannot be reassigned.

Example:

const age = 25;
const name = "John";


Rules:

1. Cannot be reassigned

   const age = 25;
   age = 30;     // ❌ Error

2. Must be initialized at the time of declaration

   const age;    // ❌ Error
   age = 25;

   Correct:
   const age = 25;   // ✅

3. Cannot be redeclared in same scope

   const age = 25;
   const age = 30;   // ❌ Error

4. Block scoped

   if (true) {
       const x = 10;
   }

   console.log(x);   // ❌ Error (not accessible outside block)

5. Hoisted but not initialized

   console.log(a);   // ❌ ReferenceError
   const a = 5;


--------------------------------------------------

IMPORTANT CONCEPT (Very Important)

Const does NOT mean value cannot change.
It means the variable reference cannot change.

Example with Object:

const person = {
    name: "John"
};

person.name = "Yajna";   // ✅ Allo



=========================================
DIFFERENCE BETWEEN VAR, LET, AND CONST
=========================================

Feature              | var                     | let                     | const
----------------------------------------------------------------------------------------
Introduced In        | Before ES6              | ES6 (2015)              | ES6 (2015)
Scope                | Function Scope          | Block Scope             | Block Scope
Reassignment         | Allowed                 | Allowed                 | Not Allowed
Redeclaration        | Allowed                 | Not Allowed             | Not Allowed
Must Initialize      | Not Required            | Not Required            | Required
Hoisting             | Yes (initialized as undefined) | Yes (but not initialized) | Yes (but not initialized)
Access Before Declare| Returns undefined       | Reference Error         | Reference Error
Use in Modern JS     | Avoid                   | Recommended             | Recommended (default choice)

----------------------------------------------------------------------------------------

EXAMPLES

var:
var age = 25;
age = 30;        // ✅ Allowed
var age = 40;    // ✅ Allowed

let:
let age = 25;
age = 30;        // ✅ Allowed
let age = 40;    // ❌ Error

const:
const age = 25;
age = 30;        // ❌ Error
const age = 40;  // ❌ Error

----------------------------------------------------------------------------------------

BEST PRACTICE:
Use const by default.
Use let if value needs to change.
Avoid var in modern JavaScript.

=========================================
END
=========================================
