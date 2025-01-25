const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const price = +require('fs').readFileSync(filePath, 'utf-8').trim();

let min = 50000;
let canGiveChange = false;
for (let i = 0; i <= Math.floor(price / 5); i++) {
  let coins = i;
  let remain = price - 5 * i;
  if (remain % 2 !== 0) continue;
  coins += remain / 2;
  canGiveChange = true;
  min = coins;
}
console.log(canGiveChange ? min : -1);
