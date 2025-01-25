const [hour, minute] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

if (minute - 45 < 0) {
  let changedHour = hour - 1;
  if (changedHour < 0) {
    changedHour = 23;
  }
  let changedMinute = 60 + (minute - 45);
  console.log(changedHour, changedMinute);
} else {
  console.log(hour, minute - 45);
}

/*

10시 10분
minute - 45 = -35
hour - 1 
*/

// 시간
