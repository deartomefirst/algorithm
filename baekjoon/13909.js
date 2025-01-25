const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const n = +require('fs').readFileSync(filePath, 'utf-8').trim();

let count = 0;
for (let i = 1; i * i <= n; i++) {
  count++;
}
console.log(count);
