
===============================
JAVASCRIPT FUNDAMENTALS NOTES
===============================

1) KEYWORDS
-----------

Definition:
Keywords are reserved words in JavaScript that have special meaning.
They cannot be used as variable names.

Examples:
let
var
const
if
for
function
return

Rule:
let if = 10;   // ❌ Error (cannot use keyword as identifier)


2) IDENTIFIER
-------------

Definition:
An identifier is the name given to a variable, function, class, or object.

Example:
let age = 25;

Here:
age → Identifier

Rules:
- Must start with letter, _ or $
- Cannot start with number
- Cannot use keywords
- Case-sensitive (age and Age are different)


3) VARIABLE
-----------

Definition:
A variable is a memory container used to store values.

Example:
let score = 90;

Here:
let → Keyword
score → Identifier
90 → Value
Memory created → Variable


Variable Types:

var   → Can reassign, Function scope
let   → Can reassign, Block scope
const → Cannot reassign, Block scope


4) DATA TYPES
-------------

A) STRING
Definition:
Text enclosed in quotes.

Examples:
let name = "Yajna";
let city = 'Delhi';
let message = `Hello`;

Quote Types:
" "  → Double quotes
' '  → Single quotes
` `  → Backticks (template literal)


B) NUMBER
Definition:
Numeric values (integer or decimal).

Examples:
let age = 25;
let price = 99.99;

(No quotes needed)


C) BOOLEAN
Definition:
Logical true or false value.

Examples:
let isActive = true;
let isLoggedIn = false;

(No quotes needed)


D) NULL
Definition:
Intentional empty value.

Example:
let data = null;


E) UNDEFINED
Definition:
Variable declared but not assigned.

Example:
let score;


5) QUOTES USAGE SUMMARY
-----------------------

Text (String)      → Use quotes
Number             → No quotes
Boolean            → No quotes
Variable name      → No quotes
Template string    → Use backticks


6) BASIC OPERATORS
------------------

=    → Assignment
+    → Addition
>    → Greater than
===  → Strict equality (value + type)


7) EXAMPLE BREAKDOWN
--------------------

let age = 20;

if (age > 18) {
  console.log("Adult");
}

let      → Keyword
age      → Identifier
20       → Number
if       → Keyword
>        → Operator
"Adult"  → String
console.log() → Method


===============================
END OF NOTES
===============================
