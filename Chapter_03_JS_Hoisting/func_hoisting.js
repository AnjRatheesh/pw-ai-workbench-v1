/* newStatus();
function newStatus() {
    console.log("This is a new status");
}*/

// Explanation: In JavaScript, function declarations are hoisted to the top of their scope.
//  This means that the entire function definition is available before it is encountered in the code.
//  Therefore, we can call 'newStatus()' before its declaration without any issues, and it will execute successfully.


function getUserStatus() {

    console.log(status_code);
    var status_code = "Active";
    console.log(status_code);

}
getUserStatus();
//output: undefined
//output: Active
//explanation: In this example, the variable 'status_code' is declared using 'var',
//  which is hoisted to the top of the function scope. However,
// only the declaration is hoisted, not the initialization.
// Therefore, when we try to access 'status_code' before it is assigned a value, it exists but is undefined.
//  After the line where 'status_code' is assigned "Active", it holds that value and is printed as such.
