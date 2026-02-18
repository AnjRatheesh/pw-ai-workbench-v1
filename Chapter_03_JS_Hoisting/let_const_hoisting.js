console.log(x)
let x = "abc"; //output: ReferenceError: Cannot access 'x' before initialization


console.log(y)
const y = "mnp"; //output: ReferenceError: Cannot access 'y' before initialization



// Explanation: In JavaScript, variable declarations using 'let' and 'const' are also hoisted to the top of their scope,
// but they are not initialized until their definition is evaluated.
// This creates a "temporal dead zone" from the start of the block until the declaration is encountered.
// Therefore, trying to access 'x' before it is initialized results in a ReferenceError.