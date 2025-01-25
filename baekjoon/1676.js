const fs = require('fs');
const input = fs.readFileSync('input.txt').toString();
let count5 = 0;
for (let i = 2; i <= input; i++) {
  let temp = i;
  while (!(temp % 5)) {
    count5++;
    temp /= 5;
  }
}
console.log(count5);
