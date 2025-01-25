const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

let chapter = 0;
let now = 0;
for (let i = 1; i < input.length; i++) {
  now += input[i];

  if (now >= 30) {
    if (30 - now + input[i] >= input[i] / 2) chapter++;
    now = 0;
  } else {
    chapter++;
  }
}
console.log(chapter);

/*

30분이 넘는 경우를 어떻게 처리할 지....


10

10 + 20

30





*/
