/*

어떤 것을 사용해야 하는지ㅏ...
케빈베이컨 수가 가장 작은 사람을 출력한다.

*/
const input = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');

const [N, M] = input[0]
  .trim()
  .split(' ')
  .map((v) => +v);

// 
let result = [];

let queue = [];
function bfs(start, finish) {
  queue = [start];
  
}