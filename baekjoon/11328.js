/*

Possible
Impossible
n 개 -> n 개 출력

미리 비교하면 좋은 특성들을 고려하자. -> length


*/

const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
let length = +input[0];
let result = '';
for (let i = 1; i <= length; i++) {
  let isFry = false;
  const frequencyCounter = {};
  const [first, second] = input[i].trim().split(' ');
  // 길이가 다른 경우
  if (first.length !== second.length) {
    result += 'Impossible\n';
    continue;
  }

  for (let j = 0; j < first.length; j++) {
    frequencyCounter[first[j]] = ++frequencyCounter[first[j]] || 1;
  }
  for (let j = 0; j < second.length; j++) {
    if (frequencyCounter[second[j]] === undefined) {
      isFry = true;
      break;
    } else {
      frequencyCounter[second[j]] = frequencyCounter[second[j]] -= 1;
      if (frequencyCounter[second[j]] < 0) {
        isFry = true;
        break;
      }
    }
  }
  if (isFry) {
    result += 'Impossible\n';
  } else {
    result += 'Possible\n';
  }
}
console.log(result.trim());
