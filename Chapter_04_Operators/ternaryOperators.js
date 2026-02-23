/*Ternary Operators are a concise way to perform conditional operations in JavaScript.The syntax for the ternary operator is as follows:
condition ? expressionIfTrue : expressionIfFalse;*/

/*
Here's how it works:
1. condition: This is the expression that is evaluated.If it evaluates to true, the expressionIfTrue is executed; otherwise, the expressionIfFalse is executed.
2. expressionIfTrue: This is the expression that is executed if the condition is true.
3. expressionIfFalse: This is the expression that is executed if the condition is false.
*/

let age = 18;
let canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: "Yes, you can vote."

/*In this example, the condition age >= 18 is evaluated. If it is true, the string "Yes, you can vote." is assigned to the variable canVote; 
otherwise, "No, you cannot vote." is assigned. 
The ternary operator provides a more concise way to write simple conditional statements compared to using if-else statements.*/












