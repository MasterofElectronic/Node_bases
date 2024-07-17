const fs =  require('fs');

const data = fs.readFileSync('readme.md', 'utf8');

const wordCount = data.split(' ');



// for (let i = 0; i < wordCount.length; i++) {
    
//     if (wordCount[i].toLowerCase().includes('react')) {
//         Reactcount += 1; 
//     }

// }
const Reactcount = data.match(/react/gi).length;



console.log('Palabras', wordCount);
console.log('Palabra React', Reactcount);