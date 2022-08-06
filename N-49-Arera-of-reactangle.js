// আয়তক্ষেত্রের পরিসীমা = ২(দৈর্ঘ্য + প্রস্থ)
// Area of rectangle = 2(length + width)

function rectangle(length, width) {

    const fixedvalue = 2;

    const sumationOfLengthWidth = length + width;

    const result = sumationOfLengthWidth * fixedvalue;
    return result;

}


const lengthnumber = 2;
const widthnumber = 3;

const finalResult = rectangle(lengthnumber, widthnumber);

console.log(finalResult);



