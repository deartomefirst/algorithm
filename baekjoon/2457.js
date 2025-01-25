const input = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');
const num = Number(input[0]);
const flowers = input.slice(1).map((v) => v.split(' ').map((v) => +v));
const arr = [];
for (let i = 0; i < num; i++) {
  arr.push([
    flowers[i][0] * 100 + flowers[i][1],
    flowers[i][2] * 100 + flowers[i][3],
  ]);
}

arr.sort((a, b) => {
  if (a[0] - b[0]) return a[0] - b[0];
  return a[1] - b[1];
});

let count = 0;
let start = 301;

while (start < 1201) {
  let nextStart = start;
  for (let i = 0; i < num; i++) {
    if (flowers[i][0] <= start && flowers[i][1] > nextStart) {
      nextStart = flowers[i][0];
    }
  }
  if (nextStart === start) {
    console.log(0);
    process.exit();
  }
  count++;
  start = nextStart;
}
console.log(count);
