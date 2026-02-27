//Create a program that determines whether a given year is a leap year. A leap year is divisible by 4, but not by 100 unless it is also divisible by 400. 
// Use an if-else statement to make this determination.

let year = 2026;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Its a leap year")

}
else {
    console.log("not a leap year");
}
