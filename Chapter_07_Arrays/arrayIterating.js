// ===== ITERATING & LOOPING THROUGH ARRAYS =====

// ========== for loop ==========

// 1. Traditional for loop
let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
console.log('--- Traditional for loop ---');
console.log('Fruits:', fruits);
for (let i = 0; i < fruits.length; i++) {
    console.log(`Index ${i}: ${fruits[i]}`);
}

// Iterate in reverse
console.log('\nReverse order:');
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(`Index ${i}: ${fruits[i]}`);
}

// ========== forEach ==========

// 2. forEach - Execute function for each element
let colors = ['Red', 'Green', 'Blue'];
console.log('\n--- forEach ---');
console.log('Colors:', colors);
colors.forEach((color, index) => {
    console.log(`${index}: ${color}`);
});

// forEach with objects
let users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 28 }
];
console.log('\n--- forEach with objects ---');
users.forEach((user, index) => {
    console.log(`${index + 1}. ${user.name} is ${user.age} years old`);
});

// ========== for...of loop ==========

// 3. for...of - Iterate over values
let numbers = [10, 20, 30, 40];
console.log('\n--- for...of loop ---');
console.log('Numbers:', numbers);
for (let num of numbers) {
    console.log(num);
}

// for...of with objects array
let products = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Mouse', price: 500 }
];
console.log('\n--- for...of with objects ---');
for (let product of products) {
    console.log(`${product.name}: Rs.${product.price}`);
}

// ========== for...in loop ==========

// 4. for...in - Iterate over indices (not recommended for arrays)
let letters = ['a', 'b', 'c'];
console.log('\n--- for...in loop ---');
console.log('Letters:', letters);
for (let index in letters) {
    console.log(`Index ${index}: ${letters[index]}`);
}

// ========== map ==========

// 5. map - Transform each element (returns NEW array)
let nums = [1, 2, 3, 4, 5];
console.log('\n--- map function ---');
console.log('Original:', nums);
let doubled = nums.map(num => num * 2);
console.log('Doubled:', doubled);

let squared = nums.map(num => num ** 2);
console.log('Squared:', squared);

// Map with objects
let employees = [
    { name: 'John', salary: 50000 },
    { name: 'Jane', salary: 60000 },
    { name: 'Bob', salary: 55000 }
];
console.log('\n--- map with objects ---');
console.log('Employees:', employees);
let salaryWithBonus = employees.map(emp => ({
    name: emp.name,
    salary: emp.salary,
    bonus: emp.salary * 0.1
}));
console.log('With bonus:', salaryWithBonus);

// ========== filter ==========

// 6. filter - Keep only matching elements (returns NEW array)
let scores = [45, 60, 85, 72, 55, 90];
console.log('\n--- filter function ---');
console.log('Scores:', scores);
let passed = scores.filter(score => score >= 60);
console.log('Passed (>= 60):', passed);

let high = scores.filter(score => score > 80);
console.log('High scores (> 80):', high);

// ========== reduce ==========

// 7. reduce - Accumulate values into single result
let values = [10, 20, 30, 40];
console.log('\n--- reduce function ---');
console.log('Values:', values);

let sum = values.reduce((total, num) => total + num, 0);
console.log('Sum:', sum);  // 100

let product = values.reduce((acc, num) => acc * num, 1);
console.log('Product:', product);  // 240000

// reduce with objects
let transactions = [
    { type: 'credit', amount: 1000 },
    { type: 'debit', amount: 500 },
    { type: 'credit', amount: 300 },
    { type: 'debit', amount: 200 }
];
console.log('\n--- reduce with objects ---');
let balance = transactions.reduce((acc, trans) => {
    if (trans.type === 'credit') {
        return acc + trans.amount;
    } else {
        return acc - trans.amount;
    }
}, 0);
console.log('Final balance:', balance);  // 600

// ========== find & findIndex ==========

// 8. find - Get FIRST matching element
let people = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 25 }
];
console.log('\n--- find function ---');
console.log('People:', people);
let person = people.find(p => p.age > 28);
console.log('Person over 28:', person);

// 9. findIndex - Get INDEX of first matching element
let index = people.findIndex(p => p.name === 'Jane');
console.log('Index of Jane:', index);  // 1

// ========== every & some ==========

// 10. every - Check if ALL elements match
let ages = [20, 25, 30, 35];
console.log('\n--- every function ---');
console.log('Ages:', ages);
let allAdult = ages.every(age => age >= 18);
console.log('All 18+:', allAdult);  // true

// 11. some - Check if ANY element matches
let hasEven = [1, 3, 5, 7].some(num => num % 2 === 0);
console.log('\nSome numbers even:', hasEven);  // false

let hasEven2 = [1, 3, 4, 7].some(num => num % 2 === 0);
console.log('Some numbers even (with 4):', hasEven2);  // true

// ========== PRACTICAL EXAMPLES ==========

console.log('\n--- PRACTICAL EXAMPLES ---');

// Example 1: Process Order Items
let orderItems = [
    { name: 'Laptop', quantity: 1, price: 50000 },
    { name: 'Mouse', quantity: 2, price: 500 },
    { name: 'Keyboard', quantity: 1, price: 2000 }
];
console.log('Order items:', orderItems);

// Calculate total
let total = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
console.log('Total amount:', total);

// Get item names
let itemNames = orderItems.map(item => item.name);
console.log('Item names:', itemNames);

// Example 2: Grade Processing
let gradeRecords = [
    { student: 'Alice', grade: 85 },
    { student: 'Bob', grade: 72 },
    { student: 'Charlie', grade: 91 },
    { student: 'Diana', grade: 68 }
];
console.log('\n--- Grade Processing ---');

// Get average
let avgGrade = gradeRecords.reduce((sum, rec) => sum + rec.grade, 0) / gradeRecords.length;
console.log('Average grade:', avgGrade.toFixed(2));

// Get students with A grade
let topStudents = gradeRecords.filter(rec => rec.grade >= 85);
console.log('Top students:', topStudents);

// Example 3: Data Transformation
let rawData = ['John', 'Jane', 'Bob'];
console.log('\n--- Data Transformation ---');
let userObjects = rawData.map((name, index) => ({
    id: index + 1,
    name: name,
    email: `${name.toLowerCase()}@mail.com`
}));
console.log('Transformed:', userObjects);

// Example 4: Multi-step Processing
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('\n--- Multi-step Processing ---');
console.log('Original:', numbers2);

let result = numbers2
    .filter(num => num > 3)           // [4, 5, 6, 7, 8, 9, 10]
    .map(num => num * 2)              // [8, 10, 12, 14, 16, 18, 20]
    .filter(num => num > 15)          // [16, 18, 20]
    .reduce((sum, num) => sum + num, 0);  // 54

console.log('Chain result (filter > 3, map *2, filter > 15, sum):', result);
