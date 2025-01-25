const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

let t = +input[0];
let idx = 1;
const answer = [];
while (t--) {
  let n = +input[idx++];
  const [fWeight, fPrice] = input[idx++].split(' ').map(Number);
  let mostGood = fWeight / fPrice;
  let goodPrice = fPrice;
  while (n-- - 1) {
    const [weight, price] = input[idx++].split(' ').map(Number);
    if (mostGood < weight / price) {
      mostGood = weight / price;
      goodPrice = price;
    } else if (mostGood === weight / price) {
      if (price < goodPrice) {
        goodPrice = price;
      }
    }
  }

  answer.push(goodPrice);
}
console.log(answer.join('\n'));
