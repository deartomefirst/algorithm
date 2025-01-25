const num = +require('fs').readFileSync('input.txt', 'utf-8').trim();

const dp = [0, 1, 1];

for (let i = 3; i <= num; i++) {
  dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
}
console.log(String(dp[num]));

/*
0  -> 0
1  -> 1
2  -> 1
3  -> 2
100
101

4  -> 3
1000
1010
1001

5 -> 5
10000
10100
10010
10001
10101

100000
101000
100100
100010
101010
100001
101001
100101


왜 BigInt로 계산해야하는거야...?


*/
