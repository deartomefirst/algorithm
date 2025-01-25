const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [J, A, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const dic = Array(A + 1).fill(0);
let answer = 0;
for (let i = 0; i < J; i++) {
  dic[i + 1] = input[i];
}

for (let i = +J; i < +J + +A; i++) {
  let [size, num] = input[i].split(' ');
  if (dic[num] === 0) {
    continue;
  }
  if (size === 'S') {
    answer++;
    dic[num] = 0;
  } else if (size === 'M') {
    if (dic[num] === 'M' || dic[num] === 'L') {
      answer++;
      dic[num] = 0;
    }
  } else {
    if (dic[num] === 'L') {
      answer++;
      dic[num] = 0;
    }
  }
}

console.log(answer);
