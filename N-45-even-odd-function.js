
function evenOddNumbers(num1, num2) {


    var sumationofTwoNumbers = num1 + num2;
    console.log('sumation Is :', sumationofTwoNumbers);

    const divition = sumationofTwoNumbers % 2;

    if (divition == 0) {

        console.log('number is even', true);
    }
    else {

        console.log('number is odd ', false);
    }

    return divition;
}

const number1 = 98;
const number2 = 63;

const finalresult = evenOddNumbers(number1, number2);
console.log(finalresult);



