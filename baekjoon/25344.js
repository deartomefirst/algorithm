const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const cycle = input.split(' ').map(Number);
function calcLCM(a, b) {
  let larger = Math.max(a, b);
  let smaller = Math.min(a, b);
  while (larger % smaller !== 0) {
    let temp = smaller; // 2
    smaller = larger % smaller; // 1
    larger = temp; // 2  6
  }
  return (a / smaller) * b;
}

let LCM = cycle[0];
for (let i = 1; i < cycle.length; i++) {
  LCM = calcLCM(LCM, cycle[i]);
}
console.log(LCM);
