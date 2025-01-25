const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [D, K] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

const dpA = [0, 1, 0];
const dpB = [0, 0, 1];

for (let i = 3; i <= D; i++) {
  dpA[i] = dpA[i - 1] + dpA[i - 2];
  dpB[i] = dpB[i - 1] + dpB[i - 2];
}

for (let i = Math.floor(K / dpB[D]); i >= 1; i--) {
  if (K - dpB[D] * i === 0) continue;
  if ((K - dpB[D] * i) % dpA[D] === 0) {
    let min = Math.min(i, (K - dpB[D] * i) / dpA[D]);
    let max = Math.max(i, (K - dpB[D] * i) / dpA[D]);

    console.log(min + '\n' + max);
    break;
  }
}

/*

1a
2b
3ab
4abb
5aabbb
6aaabbbbb
7aaaaabbbbbbbb

[a,b,a+b,a+b+b]

3a+5b


n/5

10 

8*26


55

*/
