// 21-4 Math, abs, pow, round, ceil, floor, and random number

// three two the power eight  
const result = Math.pow(3, 8);
console.log(result);








// -------------------------------






// problem 

/* const man = 25;
const woman = 45;

const ageGAp = man - woman;

if (ageGAp > -1 && ageGAp <= 5) {

    console.log('biye kora jabe ');
}
else {

    console.log('biye kora possible naaah! ');
} */




//  anouther way with  math.abs

/* const man = 25;
const woman = 45;

const ageGAp = Math.abs(man - woman);

if (ageGAp <= 5) {

    console.log('biye kora jabe ');
}
else {

    console.log('biye kora possible naaah! ');
}
 */



// --------------------------------------------


//  kono songkha ke purno sonkhay rupantor korte hobe 


const number = 2.1416;
const FullNumber = Math.round(number);
console.log(FullNumber);
//  input = 2.1416
// output == 2



//  same code celing e nibo 

const celing = Math.ceil(2.00006);


console.log(celing);
//  same code Floor  e nibo 

const Floor = Math.floor(465.259);
console.log(Floor);





// -----------------------------



// random   ludo er moton   

const random = Math.round(Math.random() * 6);
console.log(random);