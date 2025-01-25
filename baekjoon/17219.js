const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [NM, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [N, M] = NM.split(' ').map(Number);

const dic = {};

for (let i = 0; i < N; i++) {
  const [site, password] = input[i].split(' ');
  dic[site] = password;
}
const answer = [];

for (let i = N; i < N + M; i++) {
  answer.push(dic[input[i]]);
}
console.log(answer.join('\n'));
