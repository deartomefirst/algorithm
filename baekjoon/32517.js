const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const n = +input[0];
const arr = input[1].split(' ').map(Number);

function findPreviousGrades(n) {
  const answer = new Array(n);
  answer[0] = arr[0];
  if (arr[0] === 0) return -1;
  let sum = arr[0];
  for (let i = 1; i < n; i++) {
    let avg = sum / i;

    if (arr[i] < avg) {
      answer[i] = arr[i] + 1;
    } else {
      answer[i] = arr[i];
    }
    if (answer[i] < 1 || answer[i] > 10 ** 9) {
      return -1;
    }
    sum += answer[i];
  }
  return answer.join(' ');
}

console.log(findPreviousGrades(n));

// 출력 초과가 발생하는데 이유를 잘 모르겠다.
