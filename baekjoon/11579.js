const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

let idx = 0;
let T = Number(input[idx++]);

// while (T--) {
//   let n = Number(input[idx++]);
//   const move = [];
//   for (let i = 0; i < n; i++) {
//     move.push(input[idx++].split(' ').map(Number));
//   }
//   let target = input[idx++].split(' ').map(Number);
// }
