const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const n = +input[0];
const citiDistance = input[1].split(' ').map(Number);
const oilCost = input[2].split(' ').map(Number);

// 비교 대상이 되는 처음 값과 계산에 쓰이지 않는 마지막 값은 제외시켰다.
if (oilCost[0] === 1) {
  console.log(
    citiDistance.reduce((prev, val) => prev + BigInt(val), 0n).toString()
  );
} else {
  let minCost = 0n;
  for (let i = 0; i < n - 1; i++) {
    oilCost[i] = BigInt(
      (oilCost[i - 1] || 1000000000n) >= oilCost[i]
        ? oilCost[i]
        : oilCost[i - 1]
    );
    minCost += oilCost[i] * BigInt(citiDistance[i]);
  }
  console.log(minCost.toString());
}
/*

cost배열을 순회하면서 나보다 작은 왼쪽값으로 유지하는 방법을 사용하자.


*/
