// import { stat, exists, readFile } from 'fs';
import { join } from 'path'
import { a, b, c } from './js/mod1.js';
// readFile('js/mod1.js', (err, text) => {
//         console.log(text.toString())
//     })
console.log(join(__dirname, '/dis'))
console.log(a, b, c)