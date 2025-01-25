const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [a, b] = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

console.log(`${+a * +b[2]}
${+a * +b[1]}
${+a * +b[0]}
${+a * +b}`);

console.log(2541 - 543);
