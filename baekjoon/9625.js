const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let n = +require('fs').readFileSync(filePath, 'utf-8').trim();

let [a, b] = [1, 0];

while (n !== 0) {
  [a, b] = [b, a + b];
  n--;
}
console.log(a, b);
