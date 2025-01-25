const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [b, f, c] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

let remain = b + f;
let canDrink = 0;
while (remain >= c) {
  let changed = Math.floor(remain / c);
  canDrink += changed;
  remain = remain - c * changed + changed;
}
console.log(canDrink);
