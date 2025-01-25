const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [TTMM, time] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [tt, mm] = TTMM.split(' ').map(Number);

let hour = Math.floor(time / 60);
let minute = time % 60;

if (minute + mm >= 60) {
  hour = (hour + tt + 1) % 24;
} else {
  hour = (hour + tt) % 24;
}
minute = (minute + mm) % 60;
console.log(hour, minute);
