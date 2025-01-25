const [nums, ...arr] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');

const [students, max] = nums.split(' ').map((v) => +v);
const dic = Array.from({ length: 7 }, () => [0, 0]);

for (let i = 0; i < students; i++) {
  const [jender, grade] = arr[i]
    .trim()
    .split(' ')
    .map((v) => +v);
  dic[grade][jender] += 1;
}

let room = 0;
for (let i = 1; i <= 6; i++) {
  for (let j = 0; j < 2; j++) {
    if (dic[i][j] % max > 0) {
      room = room + Math.floor(dic[i][j] / max) + 1;
    } else {
      room = room + Math.floor(dic[i][j] / max);
    }
  }
}
console.log(room);
