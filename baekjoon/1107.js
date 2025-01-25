/*

98 ~ 100 ~ 102 면 ++, --로 처리하는게 빠름

5455 ++
-> 6번

100
-> 0

500000
511111 -> 6번
11111번 아래로 가야함...

if ( 중간에 0 이면 ) length 반환하기

77777 -> 5
2223번 위로
2228

입력값
5457
3
6 7 8

*/

const fs = require('fs');
let [channel, brokenNum, btns] = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
if (btns !== undefined) {
  btns = btns.split(' ').map((v) => +v);
}

let control = 0;

let num = Number(channel);
if (num > 97 && num <= 103) {
  console.log(num - 100);
  process.exit();
}

count += channel.length;
for (let i = 0; i < channel.length; i++) {
  if (btns.includes(channel[i])) {
  }
}

// 숫자를 입력해서 채널을 이동하는 경우
if (channel.length <= 2) {
  control += channel.length;
  console.log(channel.length);
  process.exit();
}

if (brokenNum === 0) {
}
