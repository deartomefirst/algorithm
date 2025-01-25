const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const [N, S] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let count = 0;
for (let i = 1; i <= N; i++) {
  backtrack([], 0, i);
}
console.log(count);

function backtrack(current, start, n) {
  if (current.length === n) {
    if (current.reduce((prev, v) => prev + v, 0) === S) {
      count++;
    }
    return;
  }
  for (let i = start; i < arr.length; i++) {
    current.push(arr[i]);
    backtrack(current, i + 1, n);
    current.pop();
  }
}

// 방문 여부를 확인하는 배열

/*
만들 수 있는 수열을 전부 구하고
S 값과 같으면 count를 +1

어떻게 부분수열을 만들까?
visited : [ 0 0 0 0 0]
arr : [];

부분 수열을 전부 구하면 되나..?
-> 

*/
