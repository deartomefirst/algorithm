const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, K] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

const visited = Array(100001).fill(-1);

function shortestDiscoveryTime(start,finish) {
  if (start >= finish) return start - finish;
  visited[start] = 0;

  for (let i = start; i <= finish + 1; i++) {
    visited[i]
  }

  

}

if (N >= K) {
  console.log(N - K);
} else {
  dp[now - 1] = dp[now] + 1;
  dp[now + 1] = dp[now] + 1;
  

}

while (now !== K) {
  if (2 * now + 1 >= K) {
    dp[now] = dp[2 * now];
  }
  dp[now - 1] = dp[now] + 1;
  dp[now + 1] = dp[now] + 1;
  
}

function is


/*
17
16 18
8
4
2





*/
