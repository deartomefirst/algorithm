const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [m, d] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

const monthDay = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

let nowMonth = 1;
let day = 0;
while (nowMonth !== m) {
  day += monthDay[nowMonth++];
}
day += d;
console.log(days[day % 7]);