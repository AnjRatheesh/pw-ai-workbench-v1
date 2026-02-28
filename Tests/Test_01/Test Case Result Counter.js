/**
 * Test Case Result Counter
 * 
 * After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip").
 * Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped.
 * Print a test report with total tests, counts, pass rate percentage, and a verdict:
 * - All passed → ready for release
 * - ≤2 failures → review
 * - >2 failures → block release
 */



let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];

let passCount = 0, failCount = 0, skipCount = 0;

for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "pass") {
        passCount++;
    }
    else if (testResults[i] === "fail") {
        failCount++;
    }
    else if (testResults[i] === "skip") {
        skipCount++
    }
}

console.log("Total Test Run ", +testResults.length);
console.log("Tests Passed ", +passCount);
console.log("Tests Failed ", +failCount);
let passratepercentage = 0;
passratepercentage = (passCount / testResults.length) * 100;
console.log("Pass Percentage: ", +passratepercentage);

if (failCount === 0) {
    console.log("Verdict : ready for release")
}
else if (failCount <= 2) {
    console.log("Verdict : Minor failures. Review before release.")
}
else {
    console.log("Verdict : block release")
}
