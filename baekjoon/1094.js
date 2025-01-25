const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let n = +require('fs').readFileSync(filePath, 'utf-8').trim();
const sizeList = [64, 32, 16, 8, 4, 2, 1];
let count = 0;

for (let i = 0; i < sizeList.length; i++) {
  const mod = sizeList[i];
  if (n >= mod) {
    let quo = Math.floor(n / mod);
    count += quo;
    n -= mod * quo;
  }
  if (n === 0) break;
}
console.log(count);


// 