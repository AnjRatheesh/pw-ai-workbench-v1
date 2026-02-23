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
