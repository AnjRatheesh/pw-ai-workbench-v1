// ===== ADDING, REMOVING & MODIFYING ARRAY ELEMENTS =====

// ========== ADDING ELEMENTS ==========

// 1. PUSH - Add element(s) to the END (modifies original array)
let fruits = ['Apple', 'Banana', 'Orange'];
console.log('Original array:', fruits);
fruits.push('Mango');
console.log('After push:', fruits);  // ['Apple', 'Banana', 'Orange', 'Mango']
fruits.push('Kiwi', 'Pineapple');  // Can add multiple elements
console.log('After multiple push:', fruits);

// 2. UNSHIFT - Add element(s) to the BEGINNING (modifies original array)
let numbers = [10, 20, 30];
console.log('Original numbers:', numbers);
numbers.unshift(5);
console.log('After unshift:', numbers);  // [5, 10, 20, 30]
numbers.unshift(1, 2, 3);  // Can add multiple elements
console.log('After multiple unshift:', numbers);

// 3. SPLICE - Add/Remove at specific index (modifies original array)
let colors = ['Red', 'Green', 'Blue'];
console.log('Original colors:', colors);
// splice(start, deleteCount, item1, item2, ...)
colors.splice(1, 0, 'Yellow', 'Orange');  // Insert at index 1, delete 0 items
console.log('After splice (add):', colors);  // ['Red', 'Yellow', 'Orange', 'Green', 'Blue']

// 4. CONCAT - Combine arrays (creates NEW array)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = arr1.concat(arr2);
console.log('Array 1:', arr1);
console.log('Array 2:', arr2);
console.log('Concatenated:', combined);  // [1, 2, 3, 4, 5, 6]
let merged = arr1.concat([7, 8], [9, 10]);  // Can add multiple arrays
console.log('Multiple concat:', merged);

// 5. SPREAD OPERATOR - Create new array with added elements
let original = [100, 200, 300];
let withSpread = [0, ...original, 400];
console.log('Original:', original);
console.log('With spread:', withSpread);  // [0, 100, 200, 300, 400]

// ========== REMOVING ELEMENTS ==========

// 1. POP - Remove LAST element (modifies original array, returns removed element)
let stack = ['A', 'B', 'C', 'D'];
console.log('Original stack:', stack);
let removed = stack.pop();
console.log('Removed:', removed);  // 'D'
console.log('After pop:', stack);  // ['A', 'B', 'C']

// 2. SHIFT - Remove FIRST element (modifies original array, returns removed element)
let queue = [1, 2, 3, 4];
console.log('Original queue:', queue);
let first = queue.shift();
console.log('Removed:', first);  // 1
console.log('After shift:', queue);  // [2, 3, 4]

// 3. SPLICE - Remove at specific index (modifies original array)
let items = ['item1', 'item2', 'item3', 'item4'];
console.log('Original items:', items);
let removed2 = items.splice(1, 2);  // Remove 2 items starting at index 1
console.log('Removed items:', removed2);  // ['item2', 'item3']
console.log('After splice (remove):', items);  // ['item1', 'item4']

// 4. FILTER - Remove elements (creates NEW array, no modification)
let prices = [100, 200, 50, 300, 75];
console.log('Original prices:', prices);
let filtered = prices.filter(price => price >= 100);
console.log('Filtered (>= 100):', filtered);  // [100, 200, 300]
console.log('Original unchanged:', prices);

// ========== MODIFYING ELEMENTS ==========

// 1. DIRECT INDEX ASSIGNMENT - Modify specific element
let sports = ['Cricket', 'Football', 'Basketball'];
console.log('Original sports:', sports);
sports[1] = 'Tennis';
console.log('After modification:', sports);  // ['Cricket', 'Tennis', 'Basketball']

// 2. MAP - Transform elements (creates NEW array)
let nums = [1, 2, 3, 4, 5];
console.log('Original numbers:', nums);
let doubled = nums.map(num => num * 2);
console.log('Doubled:', doubled);  // [2, 4, 6, 8, 10]
console.log('Original unchanged:', nums);

// 3. FOREACH - Modify elements (modifies original array with side effect)
let scores = [10, 20, 30, 40];
console.log('Original scores:', scores);
scores.forEach((score, index) => {
    scores[index] = score + 5;
});
console.log('After forEach modification:', scores);  // [15, 25, 35, 45]

// 4. SPLICE - Replace elements (modifies original array)
let letters = ['a', 'b', 'c', 'd', 'e'];
console.log('Original letters:', letters);
letters.splice(1, 2, 'X', 'Y', 'Z');  // Remove 2 items at index 1, add 3 items
console.log('After splice (replace):', letters);  // ['a', 'X', 'Y', 'Z', 'd', 'e']

// ========== PRACTICAL EXAMPLES ==========

// Example 1: Shopping Cart
let cart = ['Laptop', 'Mouse'];
console.log('\n--- Shopping Cart ---');
console.log('Initial cart:', cart);
cart.push('Keyboard', 'Monitor');
console.log('After adding items:', cart);
cart.splice(1, 1);  // Remove Mouse
console.log('After removing Mouse:', cart);

// Example 2: Todo List
let todos = ['Buy groceries', 'Finish project', 'Call mom'];
console.log('\n--- Todo List ---');
console.log('Todos:', todos);
todos.push('Exercise');
console.log('After adding:', todos);
let completed = todos.shift();
console.log('Completed:', completed);
console.log('Remaining:', todos);

// Example 3: Modifying Objects in Array
let users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 }
];
console.log('\n--- Users Array ---');
console.log('Original:', users);
users[0].age = 26;  // Modify property
console.log('After age update:', users);
users.push({ id: 3, name: 'Bob', age: 28 });
console.log('After adding user:', users);
