console.log(a);
var a = "abc"; //output: undefined

// Explanation: In JavaScript, variable declarations using 'var' are hoisted to the top of their scope. However,
// only the declaration is hoisted, not the initialization.
// Therefore, when we try to access 'a' before it is assigned a value, it exists but is undefined.