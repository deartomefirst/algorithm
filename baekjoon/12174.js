const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);
const answer = [];

for (let i = 0; i < t; i++) {
  let strLength = Number(input[2 * i + 1]);
  let str = input[2 * i + 2];
  let binary = str.replace(/O/gi, 0).replace(/I/gi, 1);
  let temp = [];

  for (let j = 0; j < strLength * 8; j += 8) {
    temp.push(String.fromCodePoint(parseInt(binary.slice(j, j + 8), 2)));
  }
  answer.push(temp.join(''));
  // str을 잘라서 strLength와 같아지도록 만들 때까지...
  console.log(`Case #${i + 1}: ${temp.join('')}`);
}

/*

어떻게 연산을 시킬 지 먼저 정하고 들어가자!



*/
