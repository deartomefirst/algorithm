const [num, arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const calls = arr.split(' ').map((v) => +v);
let resultY = 0;
let resultM = 0;
for (let i = 0; i < +num; i++) {
  resultY += (Math.floor(calls[i] / 30) + 1) * 10;
  resultM += (Math.floor(calls[i] / 60) + 1) * 15;
}
if (resultY < resultM) {
  console.log(`Y ${resultY}`);
} else if (resultY > resultM) {
  console.log(`M ${resultM}`);
} else {
  console.log(`Y M ${resultY}`);
}

/*

1~29초
Y -> 10원

30~59초
M -> 15원

60~89초
Y M-> 30원

90~119초
Y -> 30원

Y
Math.ceil(second / 30) * 10
M
Math.ceil(second / 60) * 15


*/
