
// ===== ARRAY CREATION METHODS =====

// 1. Literal Syntax (Most Common)
let browsers = ['Chrome', 'Firefox', 'Safari', 'Edge'];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, 'hello', true, null, undefined];
let empty = [];

// 2. Array Constructor
let arr1 = new Array();  // empty array
let arr2 = new Array(5);  // array with 5 empty slots
let arr3 = new Array('Red', 'Green', 'Blue');  // [Red, Green, Blue]

// 3. Array Methods
let fromString = Array.from('hello');  // ['h', 'e', 'l', 'l', 'o']
let fromArray = Array.of(10, 20, 30);  // [10, 20, 30]

// 4. Spread Operator
let original = [1, 2, 3];
let copy = [...original];  // [1, 2, 3]
let extended = [0, ...original, 4];  // [0, 1, 2, 3, 4]

// 5. Different Data Types
let stringArray = ['Apple', 'Banana', 'Orange'];
let numArray = [10, 20, 30, 40, 50];
let boolArray = [true, false, true];
let objectArray = [{ name: 'John' }, { name: 'Jane' }];
let nestedArray = [[1, 2], [3, 4], [5, 6]];

console.log(browsers);
console.log(numbers);
console.log(mixed);