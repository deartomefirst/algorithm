const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const N = Number(n);

const counter = {};

for (let i = 0; i < N; i++) {
  let str = input[i];
  let length = str.length;

  for (let j = 0; j < length; j++) {
    counter[str[j]] = counter[str[j]] || 0;
    counter[str[j]] += Math.pow(10, length - j);
  }
}
const counterArray = Object.entries(counter).sort((a, b) => b[1] - a[1]);
let charValue = {};
counterArray.forEach((v, i) => {
  let [char, _] = v;
  charValue[char] = 9 - i;
});
let sum = 0;
for (let i = 0; i < N; i++) {
  let str = input[i];
  let length = str.length;

  for (let j = 0; j < length; j++) {
    sum += Math.pow(10, length - 1 - j) * charValue[str[j]];
  }
}
console.log(sum);

/*

알파벳마다 점수를 매겨서 계산하자!
x


map으로 하면 iterable이라서 sort를 적용하기 쉬워진다.

*/
