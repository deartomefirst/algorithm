const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
let [a, b, c] = input[0].split(' ').map(Number);
const d = Number(input[1]);

let dh = Math.floor(d / 3600);
let dm = Math.floor((d - dh * 3600) / 60);
let ds = d % 60;

c = c + ds;
b = c > 59 ? b + dm + 1 : b + dm;
a = b > 59 ? a + dh + 1 : a + dh;
console.log(a % 24, b % 60, c % 60);
