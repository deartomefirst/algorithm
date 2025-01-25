const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));
const N = +n;
console.log(N, input);


/*
3
5 3
3 2
2 6

5 3 2
3 2 6
2 6 7



*/