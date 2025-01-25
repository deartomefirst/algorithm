const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [t, ...input] = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const answer = [];

for (let i = 0; i < t; i++) {
  let n = Number(input[3 * i]);
  let bob = input[3 * i + 1].split('').map(Number);
  let alice = input[3 * i + 2].split('').map(Number).sort((a,b)=>b-a);
  // 밥의 가장 작은 수보다 작으면서 가장 큰 alice의 숫자를 고르자.
  // n자리수가 안되면 그중에서 가장 큰 숫자를 만들면 된다.
  let min = Math.min(Number(bob.join('')), Number(bob.reverse().join('')));
  let aliceCounter = Array(10).fill(0);
  for (let i = 0; i < n; i++) {
    aliceCounter[alice[i]]++;
  }
  // alice가 맨 앞자리로 만들 수 있는 값이 min의 맨 앞자리보다 클 경우,
  if (alice.at(-1) > Math.floor(min / (10 ** (n - 1)))) {
    answer.push(Number(alice.slice(0,n-1).join('')));
  } else {
    answer.push(findMaxNum(n,min, alice) || Number(alice.slice(0,n-1).join('')));
  }
}
console.log(answer.join('\n'))
// 응집도가 낮고 결합도가 높다

function findMaxNum(n, min, alice) {
  let result = generatePermutations(alice, n);
  for (let i = 0; i < result.length; i++) {
    let num = Number(result[i].join(''));
    if (num < min) {
      return num;
    }
  }
  return 0;
}

function generatePermutations(arr) {
  const result = [];
  
  function permute(current, remaining) {
    if (remaining.length === 0) {
      result.push(current);
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      const next = current.concat(remaining[i]);
      const rest = remaining.slice(0, i).concat(remaining.slice(i + 1));
      permute(next, rest);
    }
  }
  permute([], arr);
  return result;
}
