const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [T, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

for (let i = 0; i < +T; i++) {
  let N = +input[2 * i];
  let arr = input[2 * i + 1].split(' ').map(Number);
  let saleArr = [];
  for (let j = N - 1; j >= 0; j--) {
    let salePrice = (arr.pop() * 3) / 4;
    let saleIdx = arr.indexOf(salePrice);
    arr.splice(saleIdx, 1);
    saleArr.push(salePrice);
  }
  console.log(`Case #${i + 1}: ${saleArr.reverse().join(' ')}`);
}
