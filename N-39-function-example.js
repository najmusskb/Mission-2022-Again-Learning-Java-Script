/* function functionname() {


 function body___________________________________
return__________________________________________



}

  paremeters value  */




function getAvarage(assignment1, assignment2, assignment3) {

    console.log(assignment1, assignment2, assignment3);

    var sumationOfTotalMarks = assignment1 + assignment2 + assignment3;
    var avarage = sumationOfTotalMarks / 3;

    return avarage;

}



var bangla = 30;
var english = 40;
var Biology = 50;


var avarageMark = getAvarage(bangla, english, Biology);
console.log(avarageMark);



