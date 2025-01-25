const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim();

const map = new Map();
for (const i in input) {
  if (map.has(input[i])) {
    map.set([...map.get(input[i]), i]);
  } else {
    map.set(input[i], [i]);
  }
}
console.log(map);

/*

배열로 기록해서 true 로 바꾸고,

true인 것들을 순서대로 str에 더해서 출력을 반복한다.

*/
