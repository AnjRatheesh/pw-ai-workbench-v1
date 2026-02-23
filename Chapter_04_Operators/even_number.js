/* 
let i;
for (i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i + " is even number");
    }
    else {
        console.log(i + " is odd number");
    }
} */

let x = "ghy"
if (Number.isNaN(Number(x))) {
    console.log(x + " is not a number");
}

else if (x % 2 == 0) {
    console.log(x + " is even number");
}
else {
    console.log(x + " is odd number");
}
