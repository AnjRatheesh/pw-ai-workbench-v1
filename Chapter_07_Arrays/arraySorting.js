// ===== SORTING ARRAYS =====

// ========== Basic sort ==========

// 1. Default sort - converts to strings and sorts lexicographically
let fruits = ['Mango', 'Apple', 'Banana', 'Orange'];
console.log('--- Default sort ---');
console.log('Original:', fruits);
let sorted = [...fruits].sort();  // Create copy to preserve original
console.log('Sorted (default):', sorted);
console.log('Original unchanged:', fruits);

// Numbers with default sort (WRONG!)
let numbers = [10, 5, 40, 25, 1000, 1];
console.log('\n--- Numbers with default sort (Wrong!) ---');
console.log('Original:', numbers);
let wrongSort = [...numbers].sort();
console.log('Sorted (wrong):', wrongSort);  // [1, 10, 1000, 25, 40, 5] - Lexicographic!

// ========== Numeric sort ==========

// 2. Custom sort comparator for numbers (ascending)
let nums = [10, 5, 40, 25, 1000, 1];
console.log('\n--- Numeric sort (ascending) ---');
console.log('Original:', nums);
let ascending = [...nums].sort((a, b) => a - b);
console.log('Ascending:', ascending);  // [1, 5, 10, 25, 40, 1000]

// 3. Numeric sort (descending)
let descending = [...nums].sort((a, b) => b - a);
console.log('Descending:', descending);  // [1000, 40, 25, 10, 5, 1]

// ========== String sort ==========

// 4. Case-sensitive string sort
let names = ['alice', 'Bob', 'charlie', 'David'];
console.log('\n--- Case-sensitive sort ---');
console.log('Original:', names);
let caseSensitive = [...names].sort();
console.log('Default (case-sensitive):', caseSensitive);  // ['Bob', 'David', 'alice', 'charlie']

// 5. Case-insensitive string sort
let caseInsensitive = [...names].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log('Case-insensitive:', caseInsensitive);  // ['alice', 'Bob', 'charlie', 'David']

// ========== Sort objects by property ==========

// 6. Sort objects by numeric property
let students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 72 },
    { name: 'Charlie', score: 91 },
    { name: 'Diana', score: 68 }
];
console.log('\n--- Sort objects by score ---');
console.log('Original:', students);

let byScoreAsc = [...students].sort((a, b) => a.score - b.score);
console.log('By score (ascending):', byScoreAsc);

let byScoreDesc = [...students].sort((a, b) => b.score - a.score);
console.log('By score (descending):', byScoreDesc);

// 7. Sort objects by string property
let byName = [...students].sort((a, b) => a.name.localeCompare(b.name));
console.log('By name:', byName);

// ========== Sort with multiple conditions ==========

// 8. Sort by multiple properties
let employees = [
    { name: 'John', department: 'IT', salary: 50000 },
    { name: 'Jane', department: 'HR', salary: 60000 },
    { name: 'Bob', department: 'IT', salary: 55000 },
    { name: 'Alice', department: 'HR', salary: 58000 }
];
console.log('\n--- Sort by multiple properties ---');
console.log('Original:', employees);

// Sort by department, then by salary descending
let sorted2 = [...employees].sort((a, b) => {
    if (a.department !== b.department) {
        return a.department.localeCompare(b.department);
    }
    return b.salary - a.salary;
});
console.log('By dept, then salary desc:', sorted2);

// ========== Modifying original array ==========

// 9. In-place sort (modifies original)
let arr = [30, 10, 20];
console.log('\n--- In-place sort ---');
console.log('Before:', arr);
arr.sort((a, b) => a - b);
console.log('After:', arr);  // Original modified!

// 10. Create sorted copy (preserve original)
let original = [30, 10, 20];
console.log('\n--- Preserve original ---');
console.log('Original:', original);
let copy = [...original].sort((a, b) => a - b);
console.log('Copy sorted:', copy);
console.log('Original unchanged:', original);

// ========== Advanced sorting ==========

// 11. Sort strings by length
let words = ['elephant', 'cat', 'butterfly', 'dog', 'ant'];
console.log('\n--- Sort by string length ---');
console.log('Original:', words);
let byLength = [...words].sort((a, b) => a.length - b.length);
console.log('By length (ascending):', byLength);

// 12. Custom sort logic
let data = [
    { id: 3, value: 'C', priority: 'high' },
    { id: 1, value: 'A', priority: 'low' },
    { id: 2, value: 'B', priority: 'high' }
];
console.log('\n--- Custom priority sort ---');
console.log('Original:', data);

let byPriority = [...data].sort((a, b) => {
    const priorityOrder = { 'high': 1, 'medium': 2, 'low': 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
});
console.log('By priority:', byPriority);

// ========== Special sorting cases ==========

// 13. Sort with null/undefined handling
let mixed = [5, null, 3, undefined, 1, 4, 2];
console.log('\n--- Sort with null/undefined ---');
console.log('Original:', mixed);

let cleaned = mixed
    .filter(x => x != null)
    .sort((a, b) => a - b);
console.log('Filtered and sorted:', cleaned);

// 14. Reverse sort
let nums2 = [10, 5, 40, 25, 1];
console.log('\n--- Reverse ---');
console.log('Original:', nums2);
let reversed = [...nums2].reverse();
console.log('Reversed:', reversed);

// Combine reverse with sort
let mixed2 = [5, 3, 1, 4, 2];
let descByReverse = [...mixed2].sort((a, b) => b - a);  // Or use .reverse()
console.log('Desc by sort:', descByReverse);

// ========== PRACTICAL EXAMPLES ==========

console.log('\n--- PRACTICAL EXAMPLES ---');

// Example 1: Leaderboard
let players = [
    { name: 'Alice', score: 850 },
    { name: 'Bob', score: 920 },
    { name: 'Charlie', score: 890 },
    { name: 'Diana', score: 875 }
];
console.log('Players:', players);

let leaderboard = [...players].sort((a, b) => b.score - a.score);
console.log('Leaderboard:', leaderboard);

// Add rank
let ranked = leaderboard.map((player, index) => ({
    rank: index + 1,
    ...player
}));
console.log('Ranked:', ranked);

// Example 2: Sort Invoice by date
let invoices = [
    { id: 101, date: new Date('2024-03-15'), amount: 5000 },
    { id: 102, date: new Date('2024-03-10'), amount: 3000 },
    { id: 103, date: new Date('2024-03-20'), amount: 7000 }
];
console.log('\n--- Sort by date ---');
console.log('Invoices:', invoices);

let byDate = [...invoices].sort((a, b) => a.date - b.date);
console.log('By date:', byDate);

// Example 3: Product catalog
let products = [
    { name: 'Laptop', category: 'Electronics', price: 50000 },
    { name: 'Monitor', category: 'Electronics', price: 10000 },
    { name: 'Desk', category: 'Furniture', price: 5000 },
    { name: 'Chair', category: 'Furniture', price: 3000 }
];
console.log('\n--- Product catalog ---');
console.log('Products:', products);

let byCategory = [...products].sort((a, b) => {
    if (a.category !== b.category) {
        return a.category.localeCompare(b.category);
    }
    return b.price - a.price;  // Highest price first within category
});
console.log('By category & price:', byCategory);

// Example 4: Sort and filter
let employees2 = [
    { name: 'John', salary: 50000 },
    { name: 'Jane', salary: 60000 },
    { name: 'Bob', salary: 55000 },
    { name: 'Alice', salary: 65000 }
];
console.log('\n--- Sort and filter ---');
console.log('Employees:', employees2);

let highestPaid = [...employees2]
    .sort((a, b) => b.salary - a.salary)
    .slice(0, 2);  // Top 2
console.log('Top 2 paid:', highestPaid);

// Example 5: Multi-level sort
let orders = [
    { id: 1, customer: 'John', status: 'completed', amount: 5000 },
    { id: 2, customer: 'Jane', status: 'pending', amount: 3000 },
    { id: 3, customer: 'Bob', status: 'completed', amount: 7000 },
    { id: 4, customer: 'Alice', status: 'pending', amount: 4000 }
];
console.log('\n--- Multi-level sort ---');
console.log('Orders:', orders);

let statusOrder = { 'pending': 1, 'completed': 2 };
let sorted3 = [...orders].sort((a, b) => {
    if (statusOrder[a.status] !== statusOrder[b.status]) {
        return statusOrder[a.status] - statusOrder[b.status];
    }
    return b.amount - a.amount;
});
console.log('Pending first, then by amount:', sorted3);
