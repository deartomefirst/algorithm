const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [nm, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [N, M] = nm.split(' ').map(Number);
let cube = 0;
for (let m = 0; m < M; m++) {
  if (M < 7) break;
  let count = 0;
  let [i, j, k] = input[m].split(' ').map(Number);
  if (input.includes(`${i + 1} ${j} ${k}`)) count++;
  if (input.includes(`${i - 1} ${j} ${k}`)) count++;
  if (input.includes(`${i} ${j + 1} ${k}`)) count++;
  if (input.includes(`${i} ${j - 1} ${k}`)) count++;
  if (input.includes(`${i} ${j} ${k + 1}`)) count++;
  if (input.includes(`${i} ${j} ${k - 1}`)) count++;
  if (count === 6) cube++;
}
console.log(cube);
