
HOISTING IN JAVASCRIPT – COMPLETE NOTES

1) DEFINITION

# Hoisting is the behavior in JavaScript where variable and function declarations are moved to the top of their scope during the memory creation phase before the code is executed.

Important:
- Only declarations are hoisted.
- Initializations are NOT hoisted.

------------------------------------------------------------------

2) HOW JAVASCRIPT EXECUTES CODE

JavaScript runs in two phases:

Phase 1: Memory Creation Phase
- Memory is allocated for variables and functions.
- var variables are stored as undefined.
- let and const are stored but not initialized.
- Function declarations are stored completely.

Phase 2: Execution Phase
- Code runs line by line.
- Values are assigned.
- Functions are executed.

------------------------------------------------------------------

3) VARIABLE HOISTING

A) var Example

console.log(a);
var a = 10;

Output:
undefined

Explanation (internally):

var a;          // hoisted with value undefined
console.log(a);
a = 10;

The variable exists before assignment but holds undefined.

------------------------------------------------------------------

B) let Example

console.log(b);
let b = 20;

Output:
ReferenceError

Explanation:
- let is hoisted.
- It is placed inside the Temporal Dead Zone (TDZ).
- Cannot access it before initialization.

------------------------------------------------------------------

C) const Example

console.log(c);
const c = 30;

Output:
ReferenceError

Explanation:
- const behaves like let.
- It is hoisted but not accessible before initialization.

------------------------------------------------------------------

4) TEMPORAL DEAD ZONE (TDZ)

Definition:
# Temporal Dead Zone is the time between entering a block and initializing a let or const variable.

Example:

{
   console.log(x);
   let x = 5;
}

Output:
ReferenceError

Even though x exists in memory, it cannot be used before initialization.

------------------------------------------------------------------

5) FUNCTION HOISTING

A) Function Declaration (Fully Hoisted)

greet();

function greet() {
   console.log("Hello");
}

Output:
Hello

Explanation:
The entire function is stored in memory before execution.

------------------------------------------------------------------

B) Function Expression

sayHi();

var sayHi = function() {
   console.log("Hi");
};

Output:
TypeError: sayHi is not a function

Explanation (internally):

var sayHi;     // hoisted as undefined
sayHi();       // undefined() causes error
sayHi = function() {};

Only the variable is hoisted, not the function definition.

------------------------------------------------------------------

C) Arrow Function

hello();

const hello = () => {
   console.log("Hello");
};

Output:
ReferenceError

Arrow functions behave like let and const.

------------------------------------------------------------------

6) SUMMARY

var
- Hoisted: Yes
- Initial value: undefined
- Accessible before initialization: Yes

let
- Hoisted: Yes
- Initial value: Uninitialized
- Accessible before initialization: No (TDZ)

const
- Hoisted: Yes
- Initial value: Uninitialized
- Accessible before initialization: No (TDZ)

Function Declaration
- Fully hoisted
- Can call before declaration

Function Expression
- Only variable hoisted
- Cannot call before declaration

------------------------------------------------------------------

IMPORTANT POINTS

- Hoisting happens during memory creation phase.
- Only declarations are hoisted.
- Initialization is never hoisted.
- let and const are hoisted but placed in TDZ.
- Function declarations are fully hoisted.
- Function expressions and arrow functions are not fully hoisted.
