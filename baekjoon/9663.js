const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const n = +require('fs').readFileSync(filePath, 'utf-8').trim();

let isUsed1 = Array(30).fill(0);
let isUsed2 = Array(30).fill(0);
let isUsed3 = Array(30).fill(0);

let count = 0;

function backtrack(cur) {
  if (cur === n) {
    count++;
    return;
  }

  for (let i = 0; i < n; i++) {
    if (isUsed1[i] || isUsed2[i + cur] || isUsed3[cur - i + n - 1]) continue;
    isUsed1[i] = 1;
    isUsed2[i + cur] = 1;
    isUsed3[cur - i + n - 1] = 1;
    backtrack(cur + 1);
    isUsed1[i] = 0;
    isUsed2[i + cur] = 0;
    isUsed3[cur - i + n - 1] = 0;
  }
}

backtrack(0);
console.log(count);
