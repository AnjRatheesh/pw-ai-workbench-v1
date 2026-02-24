
let side1 = 10, side2 = 15, side3 = 10;
if (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2) {

    if (side1 === side2 && side2 === side3) {
        console.log("its a equilateral  triangle")
    }
    else if (side1 === side2 || side2 === side3 && side3 === side1) {
        console.log("its a isosceles triangle")
    }
    else {
        console.log("its a scalene triangle")
    }
}
else {
    console.log("Not a triangle")
}