const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [pm, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.split(' '));

const [p, m] = pm.map(Number);

const dic = [];

for (let i = 0; i < p; i++) {
  let [l, n] = input[i];
  l = +l;
  if (dic.length === 0) {
    dic.push([[l, n]]);
  } else {
    let isInside = false;
    for (let j = 0; j < dic.length; j++) {
      let key = dic[j][0][0];
      if (key - 10 <= l && l <= key + 10) {
        if (dic[j].length === m) continue;
        else {
          dic[j].push([l, n]);
          isInside = true;
          break;
        }
      }
    }
    if (!isInside) {
      dic.push([[l, n]]);
    }
  }
}
const answer = [];
for (let i = 0; i < dic.length; i++) {
  const arr = dic[i]
    .sort((a, b) => {
      if (a[1] > b[1]) return 1;
      if (a[1] < b[1]) return -1;
      return 0;
    })
    .map((v) => v.join(' '));
  if (arr.length === m) {
    answer.push(['Started!', ...arr]);
  } else {
    answer.push(['Waiting!', ...arr]);
  }
}

console.log(answer.flat(2).join('\n'));
