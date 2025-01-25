const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const [c, d] = input[1].split(' ').map(Number);

let num = a * d + c * b;
let deno = b * d;

let large = Math.max(num, deno);
let small = Math.min(num, deno);
let remain = large % small;

while (true) {
  if (remain === 0) break;
  large = small;
  small = remain;
  remain = large % small;
}

if (remain === 0) {
  remain = small;
  console.log(num / remain, deno / remain);
} else {
  console.log(num / remain, deno / remain);
}
