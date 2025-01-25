const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [NM, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const [N, M] = NM.split(' ').map(Number);
const arr = input.map((v) => v.split(' ').map(Number));


/*
어떻게 계산할까?


총 13개

위 9개
옆 5개 5개 5개 5개 



*/