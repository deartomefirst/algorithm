const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = +require('fs').readFileSync(filePath, 'utf-8').trim();

// let dp = [0, 0, 1, 3];

// for (let i = 3; i <= input; i++) {
//   if (i % 2 === 0) {
//     dp[i] = (i / 2) * (i / 2) + 2 * dp[i / 2];
//   } else {
//     dp[i] =
//       Math.ceil(i / 2) * Math.floor(i / 2) +
//       dp[Math.ceil(i / 2)] +
//       dp[Math.floor(i / 2)];
//   }
// }
// console.log(dp[input]);

function solution(num) {
  if (num === 1n) return 0n;
  if (num % 2n === 0n) {
    return (num / 2n) * (num / 2n) + 2n * solution(num / 2n);
  } else {
    return (
      (num / 2n + 1n) * (num / 2n) +
      solution(num / 2n + 1n) +
      solution(num / 2n)
    );
  }
}

console.log(solution(BigInt(input)).toString());

/*

13 6

5 3 2 

dp로 해결하면 좋을 것 같다. 계속 더해야함

[0 0 1 3 4+1*2 6+3+1]

4 2 2
5 3 2

*/
