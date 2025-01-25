const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [NM, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const [N, M] = NM.split(' ').map(Number);

const poketmons = input.slice(0, N);
const poketmonsDic = new Map();

poketmons.forEach((v, i) => {
  poketmonsDic.set(v, i + 1);
});

let answer = [];
let regex = /^[0-9]/;
for (let i = N; i < input.length; i++) {
  if (regex.test(input[i])) {
    answer.push(poketmons[+input[i] - 1]);
  } else {
    answer.push(poketmonsDic.get(input[i]));
  }
}
console.log(answer.join('\n'));
