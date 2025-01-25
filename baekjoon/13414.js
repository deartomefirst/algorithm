const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [input, ...arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [k, l] = input.split(' ').map(Number);
let students = new Set();

for (let i = l - 1; i >= 0; i--) {
  students.add(arr[i]);
}

let answer = [];
let iterator = [...students.entries()];

for (let i = students.size - 1; i >= students.size - k; i--) {
  answer.push(iterator[i][0]);
}
console.log(answer.join('\n'));
