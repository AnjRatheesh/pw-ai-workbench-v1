// ===== TRANSFORMING ARRAYS =====

// ========== map - Transform elements ==========

// 1. Basic map transformation
let numbers = [1, 2, 3, 4, 5];
console.log('--- Basic map ---');
console.log('Original:', numbers);

let squared = numbers.map(num => num ** 2);
console.log('Squared:', squared);  // [1, 4, 9, 16, 25]

let doubled = numbers.map(num => num * 2);
console.log('Doubled:', doubled);  // [2, 4, 6, 8, 10]

let strings = numbers.map(num => `Number: ${num}`);
console.log('String transform:', strings);

// ========== filter - Select elements ==========

// 2. Filter with transformation
let scores = [45, 60, 85, 72, 55, 90];
console.log('\n--- Filter & Select ---');
console.log('Original:', scores);

let passing = scores.filter(score => score >= 60);
console.log('Passing scores:', passing);

let high = scores.filter(score => score > 80);
console.log('High scores:', high);

// ========== reduce - Aggregate values ==========

// 3. Reduce to single value
let values = [10, 20, 30, 40];
console.log('\n--- reduce to aggregate ---');

let sum = values.reduce((acc, num) => acc + num, 0);
console.log('Sum:', sum);  // 100

let product = values.reduce((acc, num) => acc * num, 1);
console.log('Product:', product);  // 240000

let max = values.reduce((acc, num) => acc > num ? acc : num);
console.log('Max:', max);  // 40

// ========== map + filter combined ==========

// 4. Chaining transformations
let students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 72 },
    { name: 'Charlie', score: 91 },
    { name: 'Diana', score: 68 }
];
console.log('\n--- Chaining map & filter ---');
console.log('Students:', students);

// Get names of students with score > 80
let topStudent = students
    .filter(s => s.score > 80)
    .map(s => s.name);
console.log('Top students:', topStudent);  // ['Alice', 'Charlie']

// ========== flatMap - Map then flatten ==========

// 5. flatMap - Useful for nested transformations
let data = [[1, 2], [3, 4], [5, 6]];
console.log('\n--- flatMap ---');
console.log('Original:', data);

let flattened = data.flat();
console.log('Flat:', flattened);  // [1, 2, 3, 4, 5, 6]

let flatMapped = data.flatMap(arr => arr.map(num => num * 2));
console.log('FlatMap (double each):', flatMapped);  // [2, 4, 6, 8, 10, 12]

let phrases = ['hello world', 'goodbye world'];
let words = phrases.flatMap(phrase => phrase.split(' '));
console.log('Phrases to words:', words);  // ['hello', 'world', 'goodbye', 'world']

// ========== flat - Flatten nested arrays ==========

// 6. Flattening arrays
let nested = [[1, 2], [3, [4, 5]], [6, [7, [8, 9]]]];
console.log('\n--- flat function ---');
console.log('Original:', nested);

let flat1 = nested.flat();  // Depth 1
console.log('Flat (depth 1):', flat1);  // [1, 2, 3, [4, 5], 6, [7, [8, 9]]]

let flat2 = nested.flat(2);  // Depth 2
console.log('Flat (depth 2):', flat2);  // [1, 2, 3, 4, 5, 6, 7, [8, 9]]

let flatDeep = nested.flat(Infinity);  // Complete flatten
console.log('Flat (complete):', flatDeep);  // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// ========== join - Combine elements ==========

// 7. Join array into string
let colors = ['Red', 'Green', 'Blue'];
console.log('\n--- join ---');
console.log('Array:', colors);
console.log('Join default:', colors.join());  // Red,Green,Blue
console.log('Join with -:', colors.join('-'));  // Red-Green-Blue
console.log('Join with space:', colors.join(' '));  // Red Green Blue

let sentence = words.join(' ');
console.log('Join words:', sentence);

// ========== split + join transformation ==========

// 8. String to array and back
let text = 'JavaScript is awesome';
console.log('\n--- split & join ---');
console.log('Original text:', text);

let textArr = text.split(' ');
console.log('Split by space:', textArr);  // ['JavaScript', 'is', 'awesome']

let uppercase = textArr.map(word => word.toUpperCase()).join(' ');
console.log('Uppercase:', uppercase);  // JAVASCRIPT IS AWESOME

// ========== Object transformations ==========

// 9. Transform array of objects
let employees = [
    { name: 'John', salary: 50000, department: 'IT' },
    { name: 'Jane', salary: 60000, department: 'HR' },
    { name: 'Bob', salary: 55000, department: 'IT' },
    { name: 'Alice', salary: 65000, department: 'Finance' }
];
console.log('\n--- Object transformations ---');
console.log('Employees:', employees);

// Extract names
let names = employees.map(emp => emp.name);
console.log('Names:', names);

// Extract with custom format
let formatted = employees.map(emp => `${emp.name} (${emp.department})`);
console.log('Formatted:', formatted);

// Calculate salary with bonus
let withBonus = employees.map(emp => ({
    ...emp,
    bonus: emp.salary * 0.1,
    totalCompensation: emp.salary * 1.1
}));
console.log('With bonus:', withBonus);

// ========== reduce for grouping ==========

// 10. Group by property
let byDepartment = employees.reduce((acc, emp) => {
    if (!acc[emp.department]) {
        acc[emp.department] = [];
    }
    acc[emp.department].push(emp.name);
    return acc;
}, {});
console.log('\n--- Group by department ---');
console.log('Grouped:', byDepartment);

// ========== reduce for counting ==========

// 11. Count occurrences
let items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
let count = items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {});
console.log('\n--- Count occurrences ---');
console.log('Items:', items);
console.log('Count:', count);

// ========== Array to Object transformation ==========

// 12. Convert array to object
let users = [
    { id: 1, name: 'John', email: 'john@mail.com' },
    { id: 2, name: 'Jane', email: 'jane@mail.com' },
    { id: 3, name: 'Bob', email: 'bob@mail.com' }
];
console.log('\n--- Array to Object ---');
console.log('Users array:', users);

let usersObject = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
}, {});
console.log('Users object:', usersObject);

// ========== PRACTICAL EXAMPLES ==========

console.log('\n--- PRACTICAL EXAMPLES ---');

// Example 1: E-commerce Price Calculation
let products = [
    { name: 'Laptop', price: 50000, quantity: 1, tax: 0.18 },
    { name: 'Mouse', price: 500, quantity: 2, tax: 0.18 },
    { name: 'Keyboard', price: 2000, quantity: 1, tax: 0.05 }
];
console.log('Products:', products);

let cartSummary = products.map(p => ({
    name: p.name,
    quantity: p.quantity,
    price: p.price,
    subtotal: p.price * p.quantity,
    tax: p.price * p.quantity * p.tax,
    total: p.price * p.quantity * (1 + p.tax)
}));
console.log('Cart summary:', cartSummary);

let grandTotal = cartSummary.reduce((sum, item) => sum + item.total, 0);
console.log('Grand total:', grandTotal);

// Example 2: Data Normalization
let rawScores = ['85', '92', '78', '88', '95'];
console.log('\n--- Data Normalization ---');
console.log('Raw scores:', rawScores);

let normalizedScores = rawScores
    .map(s => parseInt(s))
    .filter(s => s >= 60)
    .map(s => ({ score: s, grade: s >= 90 ? 'A' : s >= 80 ? 'B' : 'C' }));
console.log('Normalized:', normalizedScores);

// Example 3: Complex Data Pipeline
let sales = [
    { region: 'North', amount: 10000, month: 'Jan' },
    { region: 'South', amount: 15000, month: 'Jan' },
    { region: 'North', amount: 12000, month: 'Feb' },
    { region: 'South', amount: 18000, month: 'Feb' }
];
console.log('\n--- Sales Pipeline ---');
console.log('Sales:', sales);

let salesByRegion = sales.reduce((acc, sale) => {
    if (!acc[sale.region]) {
        acc[sale.region] = [];
    }
    acc[sale.region].push(sale.amount);
    return acc;
}, {});

let regionTotals = Object.entries(salesByRegion).map(([region, amounts]) => ({
    region,
    total: amounts.reduce((sum, a) => sum + a, 0),
    average: amounts.reduce((sum, a) => sum + a, 0) / amounts.length,
    count: amounts.length
}));
console.log('Region totals:', regionTotals);
