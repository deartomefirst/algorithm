const [num, ...arr] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n')
  .map((v) => +v);

function calculateDifficulty(n, arr) {
  if (n === 0) return 0;
  arr.sort((a, b) => a - b);
  const removeCount = Math.round(n * 0.15);
  let sum = 0;
  for (let i = removeCount; i < n - removeCount; i++) {
    sum += arr[i];
  }
  return Math.round(sum / (n - removeCount * 2));
}

console.log(calculateDifficulty(num, arr));

/*

문제의 범위를 잘 확인하자... 양끝값!!!! 제발!!!

*/
