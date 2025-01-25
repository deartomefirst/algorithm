const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [T, ...arr] = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n').map(Number);



// 슈펴 소수