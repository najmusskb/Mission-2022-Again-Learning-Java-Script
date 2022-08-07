//  search  chck korbo ache string  ki nai 


const lyrics = 'Tumi bondhu kala pakhi ami jeno ki!! bosonto kale tomay bolte parini ';

const doesExist = lyrics.includes('pakkhi');

console.log(doesExist);




















//  indexOf 


console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('kailla'));
console.log(lyrics.indexOf('Tumi'));

//  anouher way (VVI)

if (lyrics.indexOf('ami') != -1) {

    console.log('Exist in side the string ')
}
else {


    console.log('can not find it ')
}











//  startswith 
console.log(lyrics.startsWith('Tumi'));
console.log(lyrics.startsWith('2mi'));











// endwith
const fileName = 'myBioData.pdf';
const othersFile = 'my pic.png';

fileName.endsWith('.pdf');
console.log(fileName);




