const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const N = +input[0];
const fruits = input[1].split(' ').map(Number);
const fruitsCounter = {};
let left = 0;
let answer = 0;
let typeNum = 0;

for (let right = 0; right < N; right++) {
  fruitsCounter[fruits[right]] = (fruitsCounter[fruits[right]] || 0) + 1;

  if (fruitsCounter[fruits[right]] === 1) {
    typeNum++;
  }

  while (typeNum > 2) {
    fruitsCounter[fruits[left]]--;

    if (fruitsCounter[fruits[left]] === 0) {
      typeNum--;
    }

    left++;
  }
  answer = Math.max(answer, right - left + 1);
}
console.log(answer);
/*

과일을 빼서 2종류만 남기고 제일 많은 수가 유지되도록...


컴퓨터적 사고를 해보자.


5 1 5 2 1
s       f





3가지다

count를 해서 0이 되면

*/
