const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [input, ...arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
let [N, K] = input.split(' ').map((v) => +v);
const coins = arr.map((v) => +v);
let count = 0;
for (let i = N - 1; i >= 0; i--) {
  if (Math.floor(K / coins[i]) > 0) {
    count += Math.floor(K / coins[i]);
    K = K - Math.floor(K / coins[i]) * coins[i];
  }
  if (K === 0) {
    console.log(count);
    break;
  }
}
