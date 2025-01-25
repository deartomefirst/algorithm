const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const num = require('fs').readFileSync(filePath, 'utf-8').trim();
console.log('FA');


// 52 10 2 2 2 2
// 1004 4 4