const [num, ...arr] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');

const spec = arr.map((v) =>
  v
    .trim()
    .split(' ')
    .map((v) => +v)
);
const rank = [];

for (let i = 0; i < +num; i++) {
  let counter = 0;
  for (let j = 0; j < +num; j++) {
    if (i !== j) {
      if (spec[i][0] < spec[j][0] && spec[i][1] < spec[j][1]) {
        counter++;
      }
    }
  }
  rank.push(counter + 1);
}
console.log(rank.join(' '));
