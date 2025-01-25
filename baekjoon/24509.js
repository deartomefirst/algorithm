const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));
const n = +N;
const isRanked = Array(n + 1).fill(false);

const answer = [];
const sortedL = [...input].sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return b[1] - a[1];
});
const sortedE = [...input].sort((a, b) => {
  if (a[2] === b[2]) {
    return a[0] - b[0];
  }
  return b[2] - a[2];
});
const sortedM = [...input].sort((a, b) => {
  if (a[3] === b[3]) {
    return a[0] - b[0];
  }
  return b[3] - a[3];
});

const sortedS = [...input].sort((a, b) => {
  if (a[4] === b[4]) {
    return a[0] - b[0];
  }
  return b[4] - a[4];
});

answer.push(sortedL[0][0]);
isRanked[sortedL[0][0]] = true;
for (let i = 0; i < 2; i++) {
  if (isRanked[sortedE[i][0]]) {
    continue;
  }
  answer.push(sortedE[i][0]);
  isRanked[sortedE[i][0]] = true;
  break;
}
for (let i = 0; i < 3; i++) {
  if (isRanked[sortedM[i][0]]) {
    continue;
  }
  answer.push(sortedM[i][0]);
  isRanked[sortedM[i][0]] = true;
  break;
}
for (let i = 0; i < 4; i++) {
  if (isRanked[sortedS[i][0]]) {
    continue;
  }
  answer.push(sortedS[i][0]);
  isRanked[sortedS[i][0]] = true;
  break;
}
console.log(answer.join(' '));
