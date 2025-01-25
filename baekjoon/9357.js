const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [T, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const answer = [];

let index = 0;

for (let i = 0; i < T; i++) {
  const fashionDic = {};
  let n = Number(input[index++]);
  if (n === 0) {
    answer.push(0);
    continue;
  }

  for (let j = 0; j < n; j++) {
    let [item, itemType] = input[index++].split(' ');
    fashionDic[itemType] = fashionDic[itemType] || [];
    fashionDic[itemType].push(item);
  }
  let combination = 1;
  for (const key in fashionDic) {
    combination *= fashionDic[key].length + 1;
  }
  answer.push(combination - 1);
}
console.log(answer.join('\n'));
