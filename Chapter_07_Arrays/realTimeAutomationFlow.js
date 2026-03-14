// ================================================================
// REAL-TIME AUTOMATION: E-COMMERCE ORDER MANAGEMENT SYSTEM
// ================================================================
// This program demonstrates real-world array usage in automation
// Including: creation, searching, filtering, sorting, transforming,
// iterating, modifying, and aggregating array data
// ================================================================

// ========== 1. INITIAL DATA (ARRAY CREATION) ==========
console.log('========== E-COMMERCE ORDER MANAGEMENT SYSTEM ==========\n');

// Product Database
let products = [
    { id: 101, name: 'Laptop', category: 'Electronics', price: 50000, stock: 15 },
    { id: 102, name: 'Mouse', category: 'Electronics', price: 500, stock: 100 },
    { id: 103, name: 'Keyboard', category: 'Electronics', price: 2000, stock: 50 },
    { id: 104, name: 'Desk', category: 'Furniture', price: 5000, stock: 20 },
    { id: 105, name: 'Chair', category: 'Furniture', price: 3000, stock: 35 },
    { id: 106, name: 'Monitor', category: 'Electronics', price: 10000, stock: 25 }
];

// Customer Database
let customers = [
    { id: 1001, name: 'John Doe', email: 'john@mail.com', registeredDate: new Date('2024-01-15'), tier: 'Gold' },
    { id: 1002, name: 'Jane Smith', email: 'jane@mail.com', registeredDate: new Date('2024-02-20'), tier: 'Silver' },
    { id: 1003, name: 'Bob Wilson', email: 'bob@mail.com', registeredDate: new Date('2024-03-05'), tier: 'Bronze' },
    { id: 1004, name: 'Alice Johnson', email: 'alice@mail.com', registeredDate: new Date('2024-01-10'), tier: 'Gold' }
];

// Orders Database
let orders = [
    { orderId: 2001, customerId: 1001, products: [101, 102], status: 'delivered', date: new Date('2024-03-01'), amount: 50500 },
    { orderId: 2002, customerId: 1002, products: [103, 104], status: 'pending', date: new Date('2024-03-05'), amount: 7000 },
    { orderId: 2003, customerId: 1001, products: [106, 102], status: 'shipped', date: new Date('2024-03-10'), amount: 10500 },
    { orderId: 2004, customerId: 1003, products: [104, 105], status: 'delivered', date: new Date('2024-03-12'), amount: 8000 },
    { orderId: 2005, customerId: 1004, products: [101], status: 'pending', date: new Date('2024-03-15'), amount: 50000 }
];

console.log('Initial Data Loaded:');
console.log('✓ Products:', products.length);
console.log('✓ Customers:', customers.length);
console.log('✓ Orders:', orders.length);

// ========== 2. SEARCHING OPERATIONS ==========
console.log('\n========== SEARCHING OPERATIONS ==========\n');

// Search 2.1: Find product by ID
function findProductById(productId) {
    return products.find(p => p.id === productId);
}

console.log('2.1 Find Product by ID (101):');
let foundProduct = findProductById(101);
console.log('Result:', foundProduct);

// Search 2.2: Search products by name
function searchProductByName(name) {
    return products.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
}

console.log('\n2.2 Search Products by name (Keyboard):');
console.log('Result:', searchProductByName('Keyboard'));

// Search 2.3: Find customer by email
function findCustomerByEmail(email) {
    return customers.find(c => c.email === email);
}

console.log('\n2.3 Find Customer by Email (alice@mail.com):');
console.log('Result:', findCustomerByEmail('alice@mail.com'));

// Search 2.4: Find orders by customer
function findOrdersByCustomer(customerId) {
    return orders.filter(o => o.customerId === customerId);
}

console.log('\n2.4 Find Orders by Customer (1001):');
console.log('Result:', findOrdersByCustomer(1001));

// ========== 3. FILTERING OPERATIONS ==========
console.log('\n========== FILTERING OPERATIONS ==========\n');

// Filter 3.1: Get available products (stock > 0)
let availableProducts = products.filter(p => p.stock > 0);
console.log('3.1 Available Products (stock > 0):');
console.log('Count:', availableProducts.length);
console.log('Products:', availableProducts.map(p => p.name));

// Filter 3.2: Get low stock products (stock < 30)
let lowStockProducts = products.filter(p => p.stock < 30);
console.log('\n3.2 Low Stock Products (stock < 30):');
console.log(lowStockProducts);

// Filter 3.3: Get expensive products (price > 5000)
let expensiveProducts = products.filter(p => p.price > 5000);
console.log('\n3.3 Expensive Products (price > 5000):');
console.log('Count:', expensiveProducts.length);
console.log('Names:', expensiveProducts.map(p => p.name));

// Filter 3.4: Get pending orders
let pendingOrders = orders.filter(o => o.status === 'pending');
console.log('\n3.4 Pending Orders:');
console.log('Count:', pendingOrders.length);
console.log('Order IDs:', pendingOrders.map(o => o.orderId));

// Filter 3.5: Get Gold tier customers
let goldCustomers = customers.filter(c => c.tier === 'Gold');
console.log('\n3.5 Gold Tier Customers:');
console.log(goldCustomers.map(c => c.name));

// Filter 3.6: Multi-condition filter - High value pending orders
let highValuePendingOrders = orders.filter(o =>
    o.status === 'pending' && o.amount > 7000
);
console.log('\n3.6 High Value Pending Orders (amount > 7000):');
console.log(highValuePendingOrders);

// ========== 4. SORTING OPERATIONS ==========
console.log('\n========== SORTING OPERATIONS ==========\n');

// Sort 4.1: Sort products by price (ascending)
let prodsAsc = [...products].sort((a, b) => a.price - b.price);
console.log('4.1 Products by Price (Ascending):');
console.log(prodsAsc.map(p => `${p.name}: Rs.${p.price}`));

// Sort 4.2: Sort products by price (descending)
let prodsDesc = [...products].sort((a, b) => b.price - a.price);
console.log('\n4.2 Products by Price (Descending):');
console.log(prodsDesc.map(p => `${p.name}: Rs.${p.price}`).slice(0, 3));

// Sort 4.3: Sort orders by amount (descending)
let ordersByAmount = [...orders].sort((a, b) => b.amount - a.amount);
console.log('\n4.3 Orders by Amount (Top 3):');
console.log(ordersByAmount.slice(0, 3).map(o => `Order ${o.orderId}: Rs.${o.amount}`));

// Sort 4.4: Sort customers by registration date (newest first)
let customersByDate = [...customers].sort((a, b) => b.registeredDate - a.registeredDate);
console.log('\n4.4 Customers by Registration (Newest first):');
console.log(customersByDate.map(c => `${c.name}: ${c.registeredDate.toDateString()}`));

// Sort 4.5: Sort by multiple criteria (Category, then Price)
let sortedByCategory = [...products].sort((a, b) => {
    if (a.category !== b.category) {
        return a.category.localeCompare(b.category);
    }
    return b.price - a.price;  // Highest price first within category
});
console.log('\n4.5 Products by Category (then Price desc):');
console.log(sortedByCategory.map(p => `${p.category} - ${p.name}: Rs.${p.price}`));

// ========== 5. TRANSFORMING OPERATIONS ==========
console.log('\n========== TRANSFORMING OPERATIONS ==========\n');

// Transform 5.1: Create price list with tax
let priceListWithTax = products.map(p => ({
    name: p.name,
    basePrice: p.price,
    tax: p.price * 0.18,
    finalPrice: p.price * 1.18
}));
console.log('5.1 Price List with Tax (18%):');
console.log(priceListWithTax.slice(0, 3));

// Transform 5.2: Create inventory report
let inventoryReport = products.map(p => ({
    product: p.name,
    category: p.category,
    stock: p.stock,
    status: p.stock > 50 ? 'High' : p.stock > 20 ? 'Medium' : 'Low',
    value: p.price * p.stock
}));
console.log('\n5.2 Inventory Report:');
console.log(inventoryReport.slice(0, 3));

// Transform 5.3: Order summary with customer details
let orderSummary = orders.map(order => {
    let customer = customers.find(c => c.id === order.customerId);
    let productNames = order.products.map(pid => {
        let prod = products.find(p => p.id === pid);
        return prod.name;
    });
    return {
        orderId: order.orderId,
        customer: customer.name,
        items: productNames,
        amount: order.amount,
        status: order.status
    };
});
console.log('\n5.3 Order Summary (with customer names):');
console.log(orderSummary);

// ========== 6. ITERATING OPERATIONS ==========
console.log('\n========== ITERATING OPERATIONS ==========\n');

// Iterate 6.1: Process each product
console.log('6.1 Process each product:');
products.forEach((product, index) => {
    console.log(`${index + 1}. ${product.name} - Rs.${product.price} (Stock: ${product.stock})`);
});

// Iterate 6.2: Update stock for low items
console.log('\n6.2 Restock Low Stock Items:');
let restockLog = [];
products.forEach(product => {
    if (product.stock < 30) {
        let oldStock = product.stock;
        product.stock += 20;  // Add 20 units
        restockLog.push(`${product.name}: ${oldStock} -> ${product.stock}`);
    }
});
console.log(restockLog);

// Iterate 6.3: Calculate total value using reduce
console.log('\n6.3 Total Inventory Value:');
let totalValue = products.reduce((sum, p) => sum + (p.price * p.stock), 0);
console.log('Total Inventory Value: Rs.' + totalValue);

// ========== 7. AGGREGATION & STATISTICS ==========
console.log('\n========== AGGREGATION & STATISTICS ==========\n');

// Aggregate 7.1: Total sales
let totalSales = orders.reduce((sum, order) => sum + order.amount, 0);
console.log('7.1 Total Sales: Rs.' + totalSales);

// Aggregate 7.2: Average order value
let avgOrderValue = totalSales / orders.length;
console.log('7.2 Average Order Value: Rs.' + avgOrderValue.toFixed(2));

// Aggregate 7.3: Group by status
let orderByStatus = orders.reduce((acc, order) => {
    if (!acc[order.status]) {
        acc[order.status] = [];
    }
    acc[order.status].push(order.orderId);
    return acc;
}, {});
console.log('7.3 Orders by Status:', orderByStatus);

// Aggregate 7.4: Product wise sales count
let productSalesCount = orders.reduce((acc, order) => {
    order.products.forEach(productId => {
        let prod = products.find(p => p.id === productId);
        if (prod) {
            acc[prod.name] = (acc[prod.name] || 0) + 1;
        }
    });
    return acc;
}, {});
console.log('7.4 Sales Count by Product:', productSalesCount);

// Aggregate 7.5: Category wise revenue
let categoryRevenue = orders.reduce((acc, order) => {
    order.products.forEach(productId => {
        let prod = products.find(p => p.id === productId);
        if (prod) {
            acc[prod.category] = (acc[prod.category] || 0) + order.amount / order.products.length;
        }
    });
    return acc;
}, {});
console.log('7.5 Revenue by Category:', categoryRevenue);

// ========== 8. ADDING, REMOVING, MODIFYING ==========
console.log('\n========== DATA MODIFICATIONS ==========\n');

// Modify 8.1: Add new product
console.log('8.1 Adding New Product:');
let newProduct = { id: 107, name: 'USB Hub', category: 'Electronics', price: 800, stock: 40 };
products.push(newProduct);
console.log('Added:', newProduct.name);
console.log('Total products now:', products.length);

// Modify 8.2: Remove product from orders
console.log('\n8.2 Canceling Order:');
let cancelIndex = orders.findIndex(o => o.orderId === 2002);
if (cancelIndex !== -1) {
    let canceledOrder = orders.splice(cancelIndex, 1);
    console.log('Canceled:', canceledOrder[0].orderId);
}
console.log('Total orders now:', orders.length);

// Modify 8.3: Apply discount to Gold customers orders
console.log('\n8.3 Applying Discount to Gold Customers:');
let discountedOrders = orders.map(order => {
    let customer = customers.find(c => c.id === order.customerId);
    let discount = customer && customer.tier === 'Gold' ? order.amount * 0.10 : 0;
    return {
        ...order,
        originalAmount: order.amount,
        discount: discount,
        finalAmount: order.amount - discount
    };
});
console.log('Discounted orders:', discountedOrders);

// ========== 9. COMBINED OPERATIONS (REAL AUTOMATION FLOW) ==========
console.log('\n========== REAL AUTOMATION FLOW ==========\n');

console.log('Scenario: End-of-day Report Generation\n');

// Step 1: Get all completed orders from today
let today = new Date('2024-03-12');
let todayOrders = orders.filter(o =>
    o.date.getTime() === today.getTime() &&
    (o.status === 'delivered' || o.status === 'shipped')
);
console.log('Step 1: Orders processed today:', todayOrders.length);

// Step 2: Enrich orders with customer & product details
let enrichedOrders = todayOrders.map(order => {
    let customer = customers.find(c => c.id === order.customerId);
    let productDetails = order.products.map(pid => {
        let prod = products.find(p => p.id === pid);
        return { id: prod.id, name: prod.name, price: prod.price };
    });
    return {
        orderId: order.orderId,
        customerName: customer.name,
        customerTier: customer.tier,
        products: productDetails,
        amount: order.amount,
        status: order.status
    };
});
console.log('Step 2: Order details enriched:', enrichedOrders.length);

// Step 3: Sort by amount (high to low)
let sortedTodayOrders = enrichedOrders.sort((a, b) => b.amount - a.amount);
console.log('Step 3: Orders sorted by amount (desc)');
console.log('Top order:', sortedTodayOrders[0]);

// Step 4: Calculate totals
let dayRevenue = sortedTodayOrders.reduce((sum, o) => sum + o.amount, 0);
let goldCustomerRevenue = sortedTodayOrders
    .filter(o => o.customerTier === 'Gold')
    .reduce((sum, o) => sum + o.amount, 0);

console.log('\nStep 4: Revenue Summary');
console.log('Total Revenue:', dayRevenue);
console.log('Gold Customer Revenue:', goldCustomerRevenue);
console.log('Regular Customer Revenue:', dayRevenue - goldCustomerRevenue);

// Step 5: Generate daily report
let dailyReport = {
    date: today.toDateString(),
    ordersProcessed: sortedTodayOrders.length,
    totalRevenue: dayRevenue,
    averageOrderValue: dayRevenue / sortedTodayOrders.length,
    goldCustomerRevenue: goldCustomerRevenue,
    topOrder: sortedTodayOrders[0],
    orders: sortedTodayOrders
};

console.log('\nDaily Report Generated:');
console.log(JSON.stringify(dailyReport, null, 2).slice(0, 300) + '...');

// ========== 10. ERROR HANDLING & VALIDATION ==========
console.log('\n========== VALIDATION & CHECKS ==========\n');

// Validation 10.1: Check inventory validity
function validateInventory() {
    let issues = [];
    products.forEach(product => {
        if (product.stock < 0) {
            issues.push(`${product.name}: Negative stock`);
        }
        if (product.price <= 0) {
            issues.push(`${product.name}: Invalid price`);
        }
    });
    return issues.length === 0 ? 'Valid' : issues;
}

console.log('10.1 Inventory Validation:', validateInventory());

// Validation 10.2: Verify all orders have valid customers
function validateOrders() {
    return orders.every(order => {
        let customer = customers.find(c => c.id === order.customerId);
        return customer !== undefined;
    });
}

console.log('10.2 All orders have valid customers:', validateOrders());

// Validation 10.3: Check if all order products exist
function validateOrderProducts() {
    return orders.every(order => {
        return order.products.every(productId => {
            return products.find(p => p.id === productId) !== undefined;
        });
    });
}

console.log('10.3 All order products are valid:', validateOrderProducts());

// ========== 11. FINAL SUMMARY ==========
console.log('\n========== FINAL SYSTEM SUMMARY ==========\n');

let summary = {
    totalProducts: products.length,
    availableProducts: products.filter(p => p.stock > 0).length,
    lowStockProducts: products.filter(p => p.stock < 30).length,
    totalInventoryValue: products.reduce((sum, p) => sum + (p.price * p.stock), 0),
    totalCustomers: customers.length,
    goldCustomers: customers.filter(c => c.tier === 'Gold').length,
    totalOrders: orders.length,
    completedOrders: orders.filter(o => o.status === 'delivered').length,
    pendingOrders: orders.filter(o => o.status === 'pending').length,
    totalRevenue: orders.reduce((sum, o) => sum + o.amount, 0),
    averageOrderValue: (orders.reduce((sum, o) => sum + o.amount, 0) / orders.length).toFixed(2)
};

console.log(summary);
console.log('\n========== SYSTEM OPERATIONAL ✓ ==========');
