const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [info, arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const [n, newScore, p] = info;

function calRanking(n, newScore, p, currentRanking) {
  if (n === 0) return 1;
  if (n === p && currentRanking.at(-1) >= newScore) return -1;

  let rank = 1;
  for (let i = 0; i < n; i++) {
    if (newScore >= currentRanking[i]) return rank;
    else {
      rank++;
    }
  }
  return rank;
}

console.log(calRanking(n, newScore, p, arr));
