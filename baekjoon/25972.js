const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

input = input.map((v) => v.split(' ').map(Number));
let max = Math.max(...input);


console.log(input);

let domino = 0;
let index = 0;
for (let i = 0; i < +n; i++) {
  let [a, l] = input[i];
  if (index < a) {
    domino += 1;
    index = a + l;
  } else {
    index = Math.max(index, a + l);
  }
}

console.log(domino);
