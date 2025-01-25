const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split(' ').map(v => v.split(' ').map(Number));

/*

n이 1이면 p===1?1:0
p,q,a,n

[1,]

2


4/6
1 3
11 2



1/4 1/4
1/3 1/6

1/6 1/6 1/6


2/3
  1/3
  1/3


4/6
  1/6
  1/2

  1/6
  1/6
  1/3

  1/6
  1/4
  1/4

2/3


*/

