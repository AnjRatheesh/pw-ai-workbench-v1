// Write a program that classifies a triangle based on its side lengths.
//  Given three input values representing the lengths of the sides, determine if the triangle is equilateral (all sides are equal), isosceles (exactly two sides are equal), or scalene (no sides are equal).
//  Use an if-else statement to classify the triangle.

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