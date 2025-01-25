const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, k] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

const array = Array.from({ length: n + 1 }, () => Array(n + 1).fill(1));

for (let i = 1; i < n)

/*

n k

c(n-1,k-1) 
c(n-2, k-2) c(n-2,k-1)


c(4,2)
c(3,1) + c(3,2)


1 1 1 1 1 1
1 2 3 4 5 6
1 3 6 10 15 21
1 4 10 20 35 56
1 5 15 35 70 12
*/
