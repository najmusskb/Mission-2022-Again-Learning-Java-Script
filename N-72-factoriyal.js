// factoriyal 


/* let factorial = 1;
for (let i = 5; i >= 1; i--) {
    factorial = factorial * i;
}
console.log(factorial); */




function factoriall(i) {
    if (i == 1) {
        return 1;
    }
    return i * factoriall(i - 1);




}
const result = factoriall(5);
console.log(result);

