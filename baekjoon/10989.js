const [num, ...arr] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n')
  .map((v) => +v);

// 메모리 초과가 뜬다
console.log(arr.sort((a, b) => a - b).join('\n'));
