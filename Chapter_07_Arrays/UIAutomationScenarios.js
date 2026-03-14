// ================================================================
// UI AUTOMATION: REAL-TIME SCENARIOS WITH ARRAYS
// ================================================================
// Practical examples of how arrays are used in Playwright/Selenium
// automation for testing and interacting with web elements
// ================================================================

/*
╔════════════════════════════════════════════════════════════════╗
║        ARRAYS IN UI AUTOMATION - REAL SCENARIOS               ║
╚════════════════════════════════════════════════════════════════╝

UI automation involves:
✓ Selecting multiple elements from a page (Arrays)
✓ Iterating through elements (loops)
✓ Validating element properties (filter, every, some)
✓ Extracting data from elements (map)
✓ Performing actions on elements (forEach)
✓ Comparing expected vs actual data (includes, find)
✓ Condition-based selection (filter)
✓ Sorting and organizing results (sort)
*/

// ================================================================
// SCENARIO 1: E-COMMERCE PRODUCT PAGE AUTOMATION
// ================================================================
console.log('════════════════════════════════════════════════════════');
console.log('SCENARIO 1: E-COMMERCE PRODUCT PAGE AUTOMATION');
console.log('════════════════════════════════════════════════════════\n');

// Simulate web elements from a product page
let productElements = [
    { id: 'prod-101', name: 'Laptop', price: 50000, rating: 4.5, inStock: true, selector: '#product-101' },
    { id: 'prod-102', name: 'Mouse', price: 500, rating: 4.0, inStock: true, selector: '#product-102' },
    { id: 'prod-103', name: 'Keyboard', price: 2000, rating: 3.8, inStock: false, selector: '#product-103' },
    { id: 'prod-104', name: 'Monitor', price: 10000, rating: 4.7, inStock: true, selector: '#product-104' },
    { id: 'prod-105', name: 'Desk Chair', price: 5000, rating: 4.2, inStock: true, selector: '#product-105' }
];

console.log('SCENARIO 1.1: Get all product names');
console.log('Purpose: Extract all product titles from page\n');

let productNames = productElements.map(product => product.name);
console.log('Product names:', productNames);

console.log('\nSCENARIO 1.2: Filter only in-stock products');
console.log('Purpose: Show only available items to user\n');

let inStockProducts = productElements.filter(p => p.inStock);
console.log('In-stock products:', inStockProducts.map(p => `${p.name} (${p.price})`));

console.log('\nSCENARIO 1.3: Find products above price threshold');
console.log('Purpose: Filter expensive items\n');

let expensiveProducts = productElements.filter(p => p.price > 5000);
console.log('Expensive products (> 5000):', expensiveProducts.map(p => `${p.name}: Rs.${p.price}`));

console.log('\nSCENARIO 1.4: Click "Add to Cart" on high-rated products');
console.log('Purpose: Automate adding best-rated items\n');

let highRatedProducts = productElements.filter(p => p.rating >= 4.5);
console.log('High-rated products (>=4.5 stars):');
highRatedProducts.forEach(product => {
    console.log(`  • Click element: ${product.selector}`);
    console.log(`    └─ Adding "${product.name}" to cart`);
});

console.log('\nSCENARIO 1.5: Validate all products have valid data');
console.log('Purpose: Data integrity check\n');

let isValid = productElements.every(p =>
    p.id && p.name && p.price > 0 && p.rating > 0 && p.selector
);
console.log('All products valid:', isValid);

console.log('\nSCENARIO 1.6: Check if any product is out of stock');
console.log('Purpose: Display warning if stock issues\n');

let hasOutOfStock = productElements.some(p => !p.inStock);
console.log('Has out-of-stock items:', hasOutOfStock);
let outOfStockItems = productElements.filter(p => !p.inStock).map(p => p.name);
console.log('Out-of-stock:', outOfStockItems);

// ================================================================
// SCENARIO 2: CHECKOUT FORM WITH MULTIPLE INPUT FIELDS
// ================================================================
console.log('\n════════════════════════════════════════════════════════');
console.log('SCENARIO 2: CHECKOUT FORM AUTOMATION');
console.log('════════════════════════════════════════════════════════\n');

// Simulate form fields on checkout page
let formFields = [
    { id: 'firstName', placeholder: 'First Name', value: 'John', priority: 'required', selector: 'input#firstName' },
    { id: 'lastName', placeholder: 'Last Name', value: 'Doe', priority: 'required', selector: 'input#lastName' },
    { id: 'email', placeholder: 'Email', value: 'john@mail.com', priority: 'required', selector: 'input#email' },
    { id: 'phone', placeholder: 'Phone', value: '9876543210', priority: 'required', selector: 'input#phone' },
    { id: 'address', placeholder: 'Address', value: '123 Main St', priority: 'required', selector: 'input#address' },
    { id: 'city', placeholder: 'City', value: 'New York', priority: 'required', selector: 'input#city' },
    { id: 'zipcode', placeholder: 'Zipcode', value: '10001', priority: 'required', selector: 'input#zipcode' },
    { id: 'notes', placeholder: 'Special Notes', value: '', priority: 'optional', selector: 'textarea#notes' }
];

console.log('SCENARIO 2.1: Fill all form fields');
console.log('Purpose: Automate form filling during checkout\n');

formFields.forEach((field, index) => {
    if (field.value) {
        console.log(`  ${index + 1}. Element: ${field.selector}`);
        console.log(`     └─ Set value: "${field.value}"`);
    }
});

console.log('\nSCENARIO 2.2: Validate all required fields are filled');
console.log('Purpose: Form validation before submission\n');

let requiredFields = formFields.filter(f => f.priority === 'required');
let allRequiredFilled = requiredFields.every(f => f.value.trim() !== '');
console.log('Required fields:', requiredFields.length);
console.log('All required filled:', allRequiredFilled);

console.log('\nSCENARIO 2.3: Extract filled form data');
console.log('Purpose: Prepare data for submission\n');

let formData = {};
formFields.forEach(field => {
    if (field.value) {
        formData[field.id] = field.value;
    }
});
console.log('Form Data Object:', formData);

console.log('\nSCENARIO 2.4: Find empty optional fields');
console.log('Purpose: Show hints for incomplete fields\n');

let emptyOptionalFields = formFields.filter(f => f.priority === 'optional' && !f.value);
console.log('Empty optional fields:', emptyOptionalFields.map(f => f.placeholder));

// ================================================================
// SCENARIO 3: DATA TABLE WITH SORTING AND FILTERING
// ================================================================
console.log('\n════════════════════════════════════════════════════════');
console.log('SCENARIO 3: DATA TABLE AUTOMATION');
console.log('════════════════════════════════════════════════════════\n');

// Simulate table rows from page
let tableRows = [
    { orderID: '#2001', customer: 'John Doe', amount: 5000, status: 'Delivered', date: '2024-03-10' },
    { orderID: '#2002', customer: 'Jane Smith', amount: 3000, status: 'Pending', date: '2024-03-12' },
    { orderID: '#2003', customer: 'Bob Wilson', amount: 7500, status: 'Shipped', date: '2024-03-14' },
    { orderID: '#2004', customer: 'Alice Johnson', amount: 2500, status: 'Delivered', date: '2024-03-15' },
    { orderID: '#2005', customer: 'Mike Brown', amount: 6000, status: 'Pending', date: '2024-03-16' }
];

console.log('SCENARIO 3.1: Get all row data from table');
console.log('Purpose: Extract and verify table content\n');

console.log('Table Data:');
tableRows.forEach((row, index) => {
    console.log(`  ${index + 1}. ${row.orderID} | ${row.customer} | Rs.${row.amount} | ${row.status}`);
});

console.log('\nSCENARIO 3.2: Filter by status and click action button');
console.log('Purpose: Interact with specific pending orders\n');

let pendingOrders = tableRows.filter(row => row.status === 'Pending');
console.log('Pending orders found:', pendingOrders.length);
pendingOrders.forEach(order => {
    console.log(`  • Click "Action" button for ${order.orderID}`);
    console.log(`    └─ Customer: ${order.customer}, Amount: Rs.${order.amount}`);
});

console.log('\nSCENARIO 3.3: Sort table by amount (highest to lowest)');
console.log('Purpose: Display high-value orders first\n');

let sortedByAmount = [...tableRows].sort((a, b) => b.amount - a.amount);
console.log('Sorted (High to Low):');
sortedByAmount.forEach(row => {
    console.log(`  ${row.orderID}: Rs.${row.amount} - ${row.customer}`);
});

console.log('\nSCENARIO 3.4: Count orders by status');
console.log('Purpose: Display status summary\n');

let statusCount = {};
tableRows.forEach(row => {
    statusCount[row.status] = (statusCount[row.status] || 0) + 1;
});
console.log('Status Summary:', statusCount);

console.log('\nSCENARIO 3.5: Get all delivered orders');
console.log('Purpose: Show completed orders\n');

let deliveredOrders = tableRows.filter(row => row.status === 'Delivered');
console.log('Delivered orders:', deliveredOrders.map(o => o.orderID));

// ================================================================
// SCENARIO 4: MULTI-SELECT DROPDOWN/CHECKBOX AUTOMATION
// ================================================================
console.log('\n════════════════════════════════════════════════════════');
console.log('SCENARIO 4: MULTI-SELECT & CHECKBOXES AUTOMATION');
console.log('════════════════════════════════════════════════════════\n');

// Simulate checkbox/select options
let filterOptions = [
    { label: 'Electronics', id: 'cat-electronics', selected: false, selector: 'input#filter-electronics' },
    { label: 'Furniture', id: 'cat-furniture', selected: false, selector: 'input#filter-furniture' },
    { label: 'Clothing', id: 'cat-clothing', selected: true, selector: 'input#filter-clothing' },
    { label: 'Books', id: 'cat-books', selected: true, selector: 'input#filter-books' },
    { label: 'Toys', id: 'cat-toys', selected: false, selector: 'input#filter-toys' }
];

console.log('SCENARIO 4.1: Get all selected filter options');
console.log('Purpose: Show active filters to user\n');

let selectedFilters = filterOptions.filter(opt => opt.selected);
console.log('Selected filters:', selectedFilters.map(f => f.label));

console.log('\nSCENARIO 4.2: Click all unselected price-range checkboxes');
console.log('Purpose: Select all price filters\n');

let unselectedOptions = filterOptions.filter(opt => !opt.selected);
console.log('Unselected options to check:');
unselectedOptions.forEach(opt => {
    console.log(`  • Click checkbox: ${opt.selector}`);
    console.log(`    └─ Select "${opt.label}"`);
});

console.log('\nSCENARIO 4.3: Uncheck all selected filters');
console.log('Purpose: Clear all filters\n');

selectedFilters.forEach(filter => {
    console.log(`  • Uncheck: ${filter.selector}`);
});

console.log('\nSCENARIO 4.4: Validate at least one filter is selected');
console.log('Purpose: Ensure valid filter state\n');

let hasSelection = filterOptions.some(opt => opt.selected);
console.log('Has at least one filter selected:', hasSelection);

console.log('\nSCENARIO 4.5: Get all filter IDs for API call');
console.log('Purpose: Send selected filters to backend\n');

let filterIds = selectedFilters.map(f => f.id);
console.log('Filter IDs for API:', filterIds);

// ================================================================
// SCENARIO 5: NAVIGATION MENU & TABS AUTOMATION
// ================================================================
console.log('\n════════════════════════════════════════════════════════');
console.log('SCENARIO 5: NAVIGATION & TABS AUTOMATION');
console.log('════════════════════════════════════════════════════════\n');

// Simulate navigation menu items
let navItems = [
    { name: 'Home', url: '/', active: true, selector: 'nav a[href="/"]' },
    { name: 'Products', url: '/products', active: false, selector: 'nav a[href="/products"]' },
    { name: 'Orders', url: '/orders', active: false, selector: 'nav a[href="/orders"]' },
    { name: 'Account', url: '/account', active: false, selector: 'nav a[href="/account"]' },
    { name: 'Help', url: '/help', active: false, selector: 'nav a[href="/help"]' },
    { name: 'Logout', url: '/logout', active: false, selector: 'nav a[href="/logout"]' }
];

console.log('SCENARIO 5.1: Get all navigation items');
console.log('Purpose: Verify all menu items exist\n');

console.log('Navigation Menu:');
navItems.forEach((item, index) => {
    let activeMarker = item.active ? ' ✓ (Active)' : '';
    console.log(`  ${index + 1}. ${item.name}${activeMarker}`);
});

console.log('\nSCENARIO 5.2: Click specific navigation item');
console.log('Purpose: Navigate to Orders page\n');

let ordersNav = navItems.find(item => item.name === 'Orders');
console.log(`Click element: ${ordersNav.selector}`);
console.log(`Navigate to: ${ordersNav.url}`);

console.log('\nSCENARIO 5.3: Verify active menu item');
console.log('Purpose: Confirm current page\n');

let activeNav = navItems.find(item => item.active);
console.log(`Current page: ${activeNav.name}`);

console.log('\nSCENARIO 5.4: Get all menu URLs');
console.log('Purpose: Validate navigation structure\n');

let allUrls = navItems.map(item => item.url);
console.log('All URLs:', allUrls);

console.log('\nSCENARIO 5.5: Check if admin menu exists');
console.log('Purpose: Show/hide admin options based on role\n');

let adminItem = navItems.find(item => item.name === 'Admin');
let hasAdminAccess = adminItem !== undefined;
console.log('Admin access:', hasAdminAccess);

// ================================================================
// SCENARIO 6: CART/SHOPPING LIST AUTOMATION
// ================================================================
console.log('\n════════════════════════════════════════════════════════');
console.log('SCENARIO 6: SHOPPING CART AUTOMATION');
console.log('════════════════════════════════════════════════════════\n');

// Simulate cart items
let cartItems = [
    { productID: 101, name: 'Laptop', price: 50000, quantity: 1, selector: 'tr.cart-item-101' },
    { productID: 102, name: 'Mouse', price: 500, quantity: 2, selector: 'tr.cart-item-102' },
    { productID: 104, name: 'Monitor', price: 10000, quantity: 1, selector: 'tr.cart-item-104' },
    { productID: 105, name: 'Desk Chair', price: 5000, quantity: 3, selector: 'tr.cart-item-105' }
];

console.log('SCENARIO 6.1: Display all cart items');
console.log('Purpose: Show shopping cart summary\n');

console.log('Cart Items:');
cartItems.forEach((item, index) => {
    let subtotal = item.price * item.quantity;
    console.log(`  ${index + 1}. ${item.name} x${item.quantity} = Rs.${subtotal}`);
});

console.log('\nSCENARIO 6.2: Calculate total amount');
console.log('Purpose: Display checkout total\n');

let totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
console.log('Cart Total: Rs.' + totalAmount);

console.log('\nSCENARIO 6.3: Remove low-value items');
console.log('Purpose: Clean up cart\n');

let highValueItems = cartItems.filter(item => (item.price * item.quantity) > 1000);
console.log('Items to keep (>Rs.1000 value):');
highValueItems.forEach(item => {
    console.log(`  ✓ ${item.name}`);
});

let removedItems = cartItems.filter(item => (item.price * item.quantity) <= 1000);
console.log('Items to remove (<=Rs.1000 value):');
removedItems.forEach(item => {
    console.log(`  ✗ Remove: ${item.name}`);
    console.log(`    └─ Click delete button on ${item.selector}`);
});

console.log('\nSCENARIO 6.4: Update quantity of an item');
console.log('Purpose: Customer changes Mouse quantity from 2 to 5\n');

let mouseItem = cartItems.find(item => item.name === 'Mouse');
console.log(`Item found: ${mouseItem.name}`);
console.log(`Current qty: ${mouseItem.quantity}`);
console.log(`New qty: 5`);
console.log(`Click qty field: ${mouseItem.selector}`);
console.log(`New subtotal: Rs.${500 * 5}`);

console.log('\nSCENARIO 6.5: Apply coupon to each item');
console.log('Purpose: Calculate discounted prices\n');

let discountedCart = cartItems.map(item => ({
    name: item.name,
    originalPrice: item.price,
    discountedPrice: item.price * 0.9,  // 10% discount
    quantity: item.quantity,
    newSubtotal: (item.price * 0.9) * item.quantity
}));
console.log('Discounted cart:', discountedCart.slice(0, 2));

// ================================================================
// SCENARIO 7: VALIDATION & ERROR HANDLING
// ================================================================
console.log('\n════════════════════════════════════════════════════════');
console.log('SCENARIO 7: VALIDATION & ERROR MESSAGE HANDLING');
console.log('════════════════════════════════════════════════════════\n');

// Simulate validation messages
let validationMessages = [
    { field: 'email', message: 'Invalid email format', visible: true, selector: '.error-email' },
    { field: 'phone', message: 'Phone number must be 10 digits', visible: true, selector: '.error-phone' },
    { field: 'password', message: 'Password too short', visible: false, selector: '.error-password' },
    { field: 'address', message: 'This field is required', visible: true, selector: '.error-address' }
];

console.log('SCENARIO 7.1: Get all visible error messages');
console.log('Purpose: Display validation errors to user\n');

let visibleErrors = validationMessages.filter(msg => msg.visible);
console.log('Error messages to show:');
visibleErrors.forEach(error => {
    console.log(`  ⚠️  ${error.field}: ${error.message}`);
});

console.log('\nSCENARIO 7.2: Check if form has errors');
console.log('Purpose: Prevent form submission if errors exist\n');

let hasErrors = validationMessages.some(msg => msg.visible);
console.log('Has validation errors:', hasErrors);
console.log('Can submit form:', !hasErrors);

console.log('\nSCENARIO 7.3: Clear hidden error messages');
console.log('Purpose: Remove stale error states\n');

let elementsToHide = validationMessages.filter(msg => !msg.visible);
console.log('Error elements to hide:');
elementsToHide.forEach(error => {
    console.log(`  • Hide element: ${error.selector}`);
});

console.log('\nSCENARIO 7.4: Get all error field names');
console.log('Purpose: Focus on first error field\n');

let errorFields = visibleErrors.map(err => err.field);
console.log('Fields with errors:', errorFields);
console.log('Focus on first error field:', errorFields[0]);

console.log('\nSCENARIO 7.5: Count errors by field');
console.log('Purpose: Report error summary\n');

let errorCount = validationMessages.filter(m => m.visible).length;
console.log(`Total validation errors: ${errorCount}`);

// ================================================================
// SCENARIO 8: DATA TABLE WITH SEARCH & FILTER
// ================================================================
console.log('\n════════════════════════════════════════════════════════');
console.log('SCENARIO 8: ADVANCED TABLE SEARCH & FILTER');
console.log('════════════════════════════════════════════════════════\n');

// Simulate user list table
let usersList = [
    { id: 1, name: 'John Doe', email: 'john@mail.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@mail.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Bob Wilson', email: 'bob@mail.com', role: 'User', status: 'Inactive' },
    { id: 4, name: 'Alice Johnson', email: 'alice@mail.com', role: 'Manager', status: 'Active' },
    { id: 5, name: 'Mike Brown', email: 'mike@mail.com', role: 'User', status: 'Active' }
];

console.log('SCENARIO 8.1: Search users by name');
console.log('Purpose: Find user "John" in the table\n');

let searchTerm = 'John';
let searchResults = usersList.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
console.log(`Search results for "${searchTerm}":`, searchResults.map(u => u.name));

console.log('\nSCENARIO 8.2: Get all active users');
console.log('Purpose: Display only active users\n');

let activeUsers = usersList.filter(user => user.status === 'Active');
console.log('Active users:', activeUsers.map(u => `${u.name} (${u.role})`));

console.log('\nSCENARIO 8.3: Get all admin users');
console.log('Purpose: Show admin users for audit\n');

let adminUsers = usersList.filter(user => user.role === 'Admin');
console.log('Admin users:', adminUsers.map(u => u.name));

console.log('\nSCENARIO 8.4: Change role for all users with role "User"');
console.log('Purpose: Bulk role update\n');

let regularUsers = usersList.filter(user => user.role === 'User');
console.log('Users to update:', regularUsers.length);
regularUsers.forEach(user => {
    console.log(`  • Update role for ${user.name}: User → Member`);
});

console.log('\nSCENARIO 8.5: Validate all users have email');
console.log('Purpose: Data quality check\n');

let allHaveEmail = usersList.every(user => user.email && user.email.includes('@'));
console.log('All users have valid email:', allHaveEmail);

// ================================================================
// SCENARIO 9: REAL-TIME AUTOMATION FLOW
// ================================================================
console.log('\n════════════════════════════════════════════════════════');
console.log('SCENARIO 9: COMPLETE AUTOMATION FLOW - CHECKOUT PROCESS');
console.log('════════════════════════════════════════════════════════\n');

console.log('Step 1: Get all cart items');
let items = cartItems;
console.log(`✓ Found ${items.length} items in cart\n`);

console.log('Step 2: Validate cart is not empty');
let cartValid = items.length > 0;
console.log(`✓ Cart valid: ${cartValid}\n`);

console.log('Step 3: Calculate totals');
let cartTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
console.log(`✓ Total amount: Rs.${cartTotal}\n`);

console.log('Step 4: Fill checkout form');
console.log('✓ Fill all required fields');
let checkoutData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@mail.com',
    phone: '9876543210',
    address: '123 Main St',
    city: 'New York',
    zipcode: '10001'
};
console.log(`✓ Form data prepared\n`);

console.log('Step 5: Apply discount if available');
let discountPercent = 10;
let discountAmount = (cartTotal * discountPercent) / 100;
let finalAmount = cartTotal - discountAmount;
console.log(`✓ Discount: Rs.${discountAmount}`);
console.log(`✓ Final amount: Rs.${finalAmount}\n`);

console.log('Step 6: Click Place Order button');
console.log('✓ Click submit button\n');

console.log('Step 7: Verify order confirmation message');
console.log('✓ Order placed successfully\n');

console.log('Step 8: Extract order ID from confirmation');
let orderId = '#' + Date.now();
console.log(`✓ Order ID: ${orderId}\n`);

console.log('════════════════════════════════════════════════════════');
console.log('CHECKOUT PROCESS COMPLETED SUCCESSFULLY ✓');
console.log('════════════════════════════════════════════════════════\n');
