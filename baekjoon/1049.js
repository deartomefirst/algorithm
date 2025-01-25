const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n, m], ...arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

let minSetPrice = 1001;
let minOnePrice = 1001;

for (let i = 0; i < m; i++) {
  let [set, one] = arr[i];
  minSetPrice = Math.min(minSetPrice, set);
  minOnePrice = Math.min(minOnePrice, one);
}

console.log(
  Math.min(
    minOnePrice * n,
    Math.floor(n / 6) * minSetPrice + (n % 6) * minOnePrice,
    Math.ceil(n / 6) * minSetPrice
  )
);
