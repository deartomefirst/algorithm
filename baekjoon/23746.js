const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const n = +input[0];
let dic = {};

for (let i = 1; i <= n; i++) {
  let [b, r] = input[i].split(' ');
  dic[r] = b;
}
const before = [...input[n + 1]].map(v => dic[v]).join('');
let [s, e] = input[n + 2].split(' ').map(Number);
console.log(before.slice(s - 1, e));
/*
js에서 문자열은 immutable, 즉 문자열을 추가할 때마다 새로운 문자열 객체가 생성된다
가변인 요소인 배열을 사용했다.
*/