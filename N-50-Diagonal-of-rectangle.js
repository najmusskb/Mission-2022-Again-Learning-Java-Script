//   ৩. আয়তক্ষেত্রের কর্ণ =√ (দৈর্ঘ্য²+ প্রস্থ²)  
// Diagonal of rectangle =√ (Length²+ Breadth²)
// const number = Math.sqrt(8);
// console.log(number);


function DiagonalRectangle(length, width) {

    const squireLength = length * length;

    const squirewidth = width * width;

    const result = (squireLength + squirewidth);

    const squire = Math.sqrt(result);


    return squire;

}


const lengthnumber = 5;

const widthNumber = 5;

const finalresult = DiagonalRectangle(lengthnumber, widthNumber);

console.log(finalresult);




