//  word gulo alada alada vabe banano hoy split tag diye 


/* const lyrics = 'tumi bondhu kala pakhi ami jeno kiiiii,,bosonte kale tomay bolte parini';

const parts = lyrics.split(' ');

const sentence = lyrics.split('.');
console.log(sentence);
 */



// string er sob gulo character gulo alada kora 

const lyrics = 'tumi bondhu kala pakhi ami jeno kiiiii,,bosonte kale tomay bolte parini';
const chars = lyrics.split('');
console.log(chars);







//  string slice kora ,,mane kono kichu kata 


const partial = lyrics.slice(5, 8);
console.log(partial);



//  substring


const partialsub = lyrics.substring(5, 8);
console.log(partialsub);



// join 
const lines =
    [
        'tumi',
        'kala',
        'pakhi',
        'ami',
        'jeno',
        'kiiiii',
        'kale',
        'tomay',
        'bolte',
        'parini'
    ];

const linesjoin = lines.join(':');
console.log(linesjoin);







// go google and surch 


/* 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

*/