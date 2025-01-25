const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const n = +input[0];

let oldName = '';
let youngName = '';
let oldAgeScore = 20110101;
let youngAgeScore = 19891231;

for (let i = 1; i <= n; i++) {
  let [name, dd, mm, yyyy] = input[i].split(' ');
  dd = dd.padStart(2, '0');
  mm = mm.padStart(2, '0');
  let ageScore = Number(yyyy + mm + dd);

  if (ageScore < oldAgeScore) {
    oldName = name;
    oldAgeScore = ageScore;
  }
  if (ageScore > youngAgeScore) {
    youngName = name;
    youngAgeScore = ageScore;
  }
}
console.log(youngName + '\n' + oldName);
