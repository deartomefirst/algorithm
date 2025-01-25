const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const n = +require('fs').readFileSync(filePath, 'utf-8').trim();
let nums = [1, 5, 10, 50];
let arr = [[0]];

for (let i = 1; i <= n; i++) {
  let set = new Set();
  arr[i - 1].forEach(v => {
    nums.forEach(num => set.add(num + v));
  });
  arr[i] = [...set];
}
console.log(arr[n].length);



/*
연산의 횟수를 줄일 수 있었다.
0 0123
1 123
2 23
3 3

*/

function solution(n) {
  const nums = [1, 5, 10, 50];
  const resultSet = new Set();
  function calSum(count, sum, start) {
    if (count === n) {
      resultSet.add(sum);
      return;
    }
    for (let i = start; i < 4; i++) {
      calSum(count + 1, sum + nums[i], i);
    }

  }
  calSum(0, 0, 0);
  return resultSet.size;
}
console.log(solution(n));