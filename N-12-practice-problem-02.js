var mathemetices = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;


var TotalMarks = mathemetices + biology + chemistry + physics + bangla;

// console.log(TotalMarks);

//  get avgrage value 

var AvarageMarks = TotalMarks / 5;

AvarageMarks = AvarageMarks.toFixed(2);
AvarageMarks = parseFloat(AvarageMarks);

console.log(AvarageMarks);