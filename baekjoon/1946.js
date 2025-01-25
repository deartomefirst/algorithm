const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [T, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

// Test케이스가 존재하는 경우
// index를 만들어두자!
let idx = 0;
let answer = [];
while (idx < input.length) {
  let N = +input[idx++];
  let score = [];
  for (let i = 0; i < N; i++) {
    let [document, interview] = input[idx++].split(' ').map(Number);
    score[document - 1] = interview;
  }
  let count = 1;
  let baseline = score[0];
  for (let i = 1; i < N; i++) {
    if (score[i] < baseline) {
      baseline = score[i];
      count++;
    }
  }
  answer.push(count);
}
console.log(answer.join('\n'));

// 연산에 쓸데없는 결과를 넣지 말자!!!
/*
if

countinue;
else


*/
