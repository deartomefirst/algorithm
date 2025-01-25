const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let sum = +require('fs').readFileSync(filePath, 'utf-8').trim();

let num = 1;
while (sum >= num) {
  sum -= num;
  num++;
}
console.log(num - 1);
