const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nmr, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const [n, m, r] = nmr;


/*
회전을 시킬 때 어떻게 시킬까?



*/
