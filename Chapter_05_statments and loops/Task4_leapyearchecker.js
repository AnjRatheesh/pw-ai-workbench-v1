let year = 2026;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Its a leap year")

}
else {
    console.log("not a leap year");
}
