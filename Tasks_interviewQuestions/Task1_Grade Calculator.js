//Write a program that calculates and displays the letter grade for a given numerical score (e.g., A, B, C, D, or F) based on the following grading scale:

A: 90 - 100

B: 80 - 89

C: 70 - 79

D: 60 - 69

F: 0 - 59




let StudentGrade = 90;
if (StudentGrade >= 90 && StudentGrade <= 100) {
    console.log("Grade of the student: A");

}
else if (StudentGrade >= 80 && StudentGrade <= 89) {
    console.log("Grade of the student: B");

}
else if (StudentGrade >= 70 && StudentGrade <= 79) {
    console.log("Grade of the student: C");
}
else if (StudentGrade >= 60 && StudentGrade <= 69) {
    console.log("Grade of the student: D");
}
else {
    if (StudentGrade >= 0 && StudentGrade <= 59) {
        console.log("Grade of the student: F");
    }
}
