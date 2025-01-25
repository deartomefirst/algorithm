const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

let sum = 0;
let gradeScore = 0;
const score = {
  'A+': 4.5,
  A0: 4.0,
  'B+': 3.5,
  B0: 3.0,
  'C+': 2.5,
  C0: 2.0,
  'D+': 1.5,
  D0: 1.0,
  F: 0.0,
};

for (const element of input) {
  let [_, credit, grade] = element.split(' ');
  if (grade === 'P') continue;
  sum += score[grade] * +credit;
  gradeScore += +credit;
}
console.log(sum / gradeScore);
