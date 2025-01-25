/*

결국에는 몇번 나타났는지 확인해야한다.
indexOf는 최악의 경우 끝까지 계속 찾아야 할 수도?
객체로 바꾸고 

출력 : 단어에 포함되어 있는 a의 개수, b의 개수, ... z의 개수를 공백으로 구분해서 출력한다.


다른 사람들 풀이
fromCharCode와
match -> 정규표현식 메서드를 사용해서 해결했다.


*/

const str = require('fs').readFileSync('input.txt').toString().trim();

const letterCounter = {};
for (const letter of str) {
  letterCounter[letter] = letterCounter[letter] ? ++letterCounter[letter] : 1;
}
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let result = Array(26).fill(0);
for (let i = 0; i < alphabet.length; i++) {
  if (letterCounter[alphabet[i]]) {
    result[i] = letterCounter[alphabet[i]];
  }
}
console.log(result.join(' '));
console.log(String.fromCharCode(97));
