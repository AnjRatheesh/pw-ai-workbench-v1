// ===== SEARCHING & FINDING ELEMENTS IN ARRAYS =====

// ========== indexOf & lastIndexOf ==========

// 1. indexOf - Find FIRST occurrence (returns index, -1 if not found)
let colors = ['Red', 'Green', 'Blue', 'Red', 'Yellow'];
console.log('Colors array:', colors);
console.log('Index of Red:', colors.indexOf('Red'));  // 0
console.log('Index of Blue:', colors.indexOf('Blue'));  // 2
console.log('Index of Pink:', colors.indexOf('Pink'));  // -1 (not found)

// 2. lastIndexOf - Find LAST occurrence (returns index, -1 if not found)
let fruits = ['Apple', 'Banana', 'Orange', 'Apple', 'Mango'];
console.log('Fruits array:', fruits);
console.log('Last index of Apple:', fruits.lastIndexOf('Apple'));  // 3
console.log('Last index of Banana:', fruits.lastIndexOf('Banana'));  // 1

// ========== includes - Check if element exists ==========

// 3. includes - Check if array contains element (returns true/false)
let numbers = [10, 20, 30, 40, 50];
console.log('Numbers array:', numbers);
console.log('Includes 20:', numbers.includes(20));  // true
console.log('Includes 25:', numbers.includes(25));  // false

let names = ['John', 'Jane', 'Bob'];
console.log('Names array:', names);
console.log('Includes John:', names.includes('John'));  // true
console.log('Includes Tom:', names.includes('Tom'));  // false

// With starting position
let nums = [1, 2, 3, 4, 5, 3];
console.log('Nums array:', nums);
console.log('Includes 3 from index 3:', nums.includes(3, 3));  // true (found at index 5)
console.log('Includes 3 from index 5:', nums.includes(3, 5));  // true (found at index 5)

// ========== find - Find first matching element ==========

// 4. find - Returns FIRST element that matches condition
let users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 25 }
];
console.log('\n--- Users Array ---');
console.log('Users:', users);

let user = users.find(u => u.age > 28);
console.log('First user over 28:', user);  // { id: 2, name: 'Jane', age: 30 }

let userByName = users.find(u => u.name === 'Bob');
console.log('Find Bob:', userByName);  // { id: 3, name: 'Bob', age: 25 }

// 5. findIndex - Returns INDEX of first matching element
let userIndex = users.findIndex(u => u.age > 28);
console.log('Index of first user over 28:', userIndex);  // 1

let indexOfBob = users.findIndex(u => u.name === 'Bob');
console.log('Index of Bob:', indexOfBob);  // 2

// ========== some & every ==========

// 6. some - Check if ANY element matches condition (returns true/false)
let scores = [45, 60, 85, 72, 55];
console.log('\n--- Scores Array ---');
console.log('Scores:', scores);
console.log('Has score > 80:', scores.some(score => score > 80));  // true
console.log('Has score > 90:', scores.some(score => score > 90));  // false

// 7. every - Check if ALL elements match condition (returns true/false)
console.log('All scores > 40:', scores.every(score => score > 40));  // true
console.log('All scores > 70:', scores.every(score => score > 70));  // false

let ages = [20, 25, 30, 35];
console.log('\n--- Ages Array ---');
console.log('Ages:', ages);
console.log('Everyone 18+:', ages.every(age => age >= 18));  // true
console.log('Someone below 22:', ages.some(age => age < 22));  // true

// ========== filter - Find all matching elements ==========

// 8. filter - Returns NEW array with all matching elements
let numbers2 = [10, 20, 15, 30, 25, 40];
console.log('\n--- Filtering Numbers ---');
console.log('Original:', numbers2);
let filtered = numbers2.filter(num => num > 20);
console.log('All > 20:', filtered);  // [30, 25, 40]

let evenNumbers = numbers2.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers);  // [10, 20, 30, 40]

// ========== PRACTICAL EXAMPLES ==========

console.log('\n--- PRACTICAL EXAMPLES ---');

// Example 1: Search Product Catalog
let products = [
    { id: 1, name: 'Laptop', price: 50000, inStock: true },
    { id: 2, name: 'Mouse', price: 500, inStock: false },
    { id: 3, name: 'Keyboard', price: 2000, inStock: true },
    { id: 4, name: 'Monitor', price: 10000, inStock: true },
    { id: 5, name: 'USB Cable', price: 200, inStock: false }
];
console.log('Products:', products);

// Find product by ID
let product = products.find(p => p.id === 3);
console.log('Product with ID 3:', product);

// Find all in-stock products
let inStock = products.filter(p => p.inStock);
console.log('In-stock products:', inStock);

// Check if expensive product exists (> 20000)
let hasExpensive = products.some(p => p.price > 20000);
console.log('Has expensive product:', hasExpensive);

// Check if all products available
let allAvailable = products.every(p => p.inStock);
console.log('All products available:', allAvailable);

// Example 2: Student Grade Search
let students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 72 },
    { name: 'Charlie', grade: 91 },
    { name: 'Diana', grade: 68 }
];
console.log('\n--- Students ---');
console.log('Students:', students);

// Find students with A grade (>= 85)
let aGrades = students.filter(s => s.grade >= 85);
console.log('A grade students:', aGrades);

// Check if any failed (< 50)
let anyFailed = students.some(s => s.grade < 50);
console.log('Anyone failed:', anyFailed);

// Example 3: Email Validation in Array
let emails = ['john@mail.com', 'invalid-email', 'jane@mail.com', 'bob@mail.com'];
console.log('\n--- Email Search ---');
console.log('Emails:', emails);

let validEmail = emails.find(e => e.includes('@') && e.includes('.'));
console.log('First valid:', validEmail);

let allValid = emails.every(e => e.includes('@') && e.includes('.'));
console.log('All valid:', allValid);

// Example 4: Search with Multiple Conditions
let orders = [
    { orderId: 101, customerName: 'John', amount: 5000, status: 'delivered' },
    { orderId: 102, customerName: 'Jane', amount: 12000, status: 'pending' },
    { orderId: 103, customerName: 'Bob', amount: 3000, status: 'delivered' },
    { orderId: 104, customerName: 'Alice', amount: 8000, status: 'pending' }
];
console.log('\n--- Order Search ---');
console.log('Orders:', orders);

// Find high-value pending orders
let highValuePending = orders.filter(o => o.amount > 5000 && o.status === 'pending');
console.log('High-value pending orders:', highValuePending);

// Search by customer name
let johnOrders = orders.filter(o => o.customerName === 'John');
console.log('Johns orders:', johnOrders);
