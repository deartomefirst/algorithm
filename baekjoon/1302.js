const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const dic = {};
let mostSellCount = 0;
let mostSellTitle = [];

for (let i = 0; i < +n; i++) {
  dic[input[i]] = dic[input[i]] + 1 || 1;
  if (mostSellCount < dic[input[i]]) {
    mostSellCount = dic[input[i]];
    mostSellTitle = [input[i]];
  } else if (mostSellCount === dic[input[i]]) {
    mostSellTitle.push(input[i]);
  }
}
console.log(mostSellTitle.sort()[0]);
