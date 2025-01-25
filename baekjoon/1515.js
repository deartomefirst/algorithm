const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const arr = require('fs').readFileSync(filePath, 'utf-8').trim().split('');
let n = 1;

/*
123456789101112

20까지...

111이 차례이면서 

111이 str에 포함되어있다고 하자.



*/
