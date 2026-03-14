// ===== DATA TYPES IN ARRAYS (ADVANCED) =====
// Arrays can hold any JavaScript data type

// 1. STRING TYPE
let stringTypes = ['Hello', 'World', 'JavaScript'];
console.log('String Array:', stringTypes);
console.log(typeof stringTypes[0]);  // string

// 2. NUMBER TYPE (integers and decimals)
let numberTypes = [10, 20.5, -30, 0, 3.14];
console.log('Number Array:', numberTypes);
console.log(typeof numberTypes[1]);  // number

// 3. BOOLEAN TYPE
let booleanTypes = [true, false, true, false];
console.log('Boolean Array:', booleanTypes);
console.log(typeof booleanTypes[0]);  // boolean

// 4. NULL TYPE
let nullTypes = [null, 'data', null];
console.log('Null Array:', nullTypes);
console.log(typeof nullTypes[0]);  // object (quirk in JS)
console.log(nullTypes[0] === null);  // true

// 5. UNDEFINED TYPE
let undefinedTypes = [undefined, 'test', undefined];
console.log('Undefined Array:', undefinedTypes);
console.log(typeof undefinedTypes[0]);  // undefined

// 6. OBJECT TYPE
let objectTypes = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { color: 'red', size: 'large' }
];
console.log('Object Array:', objectTypes);
console.log(typeof objectTypes[0]);  // object

// 7. ARRAY TYPE (Nested Arrays)
let nestedArrays = [
    [1, 2, 3],
    ['a', 'b', 'c'],
    [true, false],
    [10, 'hello', true]
];
console.log('Nested Arrays:', nestedArrays);
console.log(typeof nestedArrays[0]);  // object (arrays are objects)
console.log(nestedArrays[0][1]);  // 2

// 8. FUNCTION TYPE
let functionArray = [
    function () { return 'Function 1'; },
    () => { return 'Arrow Function'; },
    function add(a, b) { return a + b; }
];
console.log('Function Array:', functionArray);
console.log(typeof functionArray[0]);  // function
console.log(functionArray[0]());  // Function 1
console.log(functionArray[2](5, 10));  // 15

// 9. SYMBOL TYPE
let sym1 = Symbol('id');
let sym2 = Symbol('name');
let symbolArray = [sym1, sym2, 'text'];
console.log('Symbol Array:', symbolArray);
console.log(typeof symbolArray[0]);  // symbol

// 10. BigInt TYPE
let bigIntArray = [100n, 200n, 300n, BigInt(1000)];
console.log('BigInt Array:', bigIntArray);
console.log(typeof bigIntArray[0]);  // bigint

// 11. MIXED DATA TYPES (All Types in One Array)
let allTypes = [
    42,                          // number
    'hello',                     // string
    true,                        // boolean
    null,                        // null
    undefined,                   // undefined
    { id: 1, name: 'John' },     // object
    [1, 2, 3],                   // array
    function () { return 5; },    // function
    Symbol('unique'),            // symbol
    100n                         // bigint
];
console.log('Mixed Array:', allTypes);

// Accessing and checking types
console.log('Element 0:', allTypes[0], 'Type:', typeof allTypes[0]);
console.log('Element 5:', allTypes[5], 'Type:', typeof allTypes[5]);
console.log('Element 7 (function):', allTypes[7](), 'Type:', typeof allTypes[7]);

// 12. PRACTICAL EXAMPLES
// Array with different data types
let userData = [
    'John Doe',           // string - name
    25,                   // number - age
    true,                 // boolean - isActive
    { email: 'john@mail.com', phone: '123-456' },  // object - contact info
    ['JavaScript', 'Python', 'Java'],  // array - skills
    null,                 // null - profile picture (not set)
    function () {          // function - method
        return 'User Details';
    }
];
console.log('User Data:', userData);
console.log('Name:', userData[0]);
console.log('Email:', userData[3].email);
console.log('Skills:', userData[4]);
console.log('Result of function:', userData[6]());
