function inToFeet(inces) {
    const Feet = inces / 12;
    return Feet;
}


const dadaInch = 120;
const DadaFeet = inToFeet(dadaInch);
console.log('dada height:', DadaFeet)



const NanaInch = 144;
const NanaFeet = inToFeet(NanaInch);
console.log('Nana height:', NanaFeet);



const abbuInch = 160;
const abbuFeet = inToFeet(abbuInch);
console.log('abbu height:', abbuFeet);








//  mile to kilometers 


function values(miles) {

    const kilometers = miles * 1.60934;
    return kilometers;
}

const milesgives = 1;
const result = values(milesgives);
console.log('kilometers : ', result);

