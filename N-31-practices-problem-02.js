/* You and your friends Tom, Jane, Peter and John got their final exam results. Your total
score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
and John’s total score is 40. The grading chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade

Write a program to find your and your friends’ grades using if-else. */


var totalMarks = 100;
var Mymark = 85;
var TomMark = 66;
var JaneMark = 95;
var peterMark = 56;
var johnmark = 40;
var sakib = 24;




if (Mymark < totalMarks) {
    console.log('First Class A');
}
else if (TomMark < totalMarks) {
    console.log('grade-B');
}
else if (JaneMark < totalMarks) {
    console.log('grade-c');
}
else if (peterMark < totalMarks) {
    console.log('grade-D');
}

else if (johnmark < totalMarks) {
    console.log('taina tuina pass');
}

else {
    console.log('fail');
}


