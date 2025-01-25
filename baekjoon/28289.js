const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

let answer = [0, 0, 0, 0];

for (let i = 1; i < input.length; i++) {
  let [grade, classNum] = input[i].split(' ').map(Number);
  if (grade === 1) {
    answer[3]++;
    continue;
  }
  if (classNum === 1 || classNum === 2) answer[0]++;
  else if (classNum === 3) answer[1]++;
  else answer[2]++;
}

console.log(answer.join('\n'));
