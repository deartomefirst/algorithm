const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const N = Number(input[0]);
const arr = input[1].split(' ').map(Number).sort((a,b)=>a-b);
const arrNum = Array(200001).fill(0);
for (let i = 0; i < N; i++) {
  arrNum[arr[i]]++;
}

let q;
let count;
let answer = 0;
for (let i = 0; i < N; i++) {
  if (arrNum[arr[i]] > 0) {
    arrNum[arr[i]]--;
    q = arr[i];
    count = 1;

    for (let j = arr[i] + 1; ; j++) {
      if (arrNum[j] > 0) {
        q = j;
        arrNum[j]--;
        count++;
      } else {
        answer += q * count;
        break;
      }
    }
  }
}

console.log(answer);
