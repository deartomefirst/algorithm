const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nm, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [N, M] = nm.split(' ').map(Number);
const result = Array(N).fill(0);

for (let l = 0; l < M; l++) {
  let [i, j, k] = input[l].split(' ').map(Number);

  for (i; i <= j; i++) {
    result[i - 1] = k;
  }
}
console.log(result.join(' '));
/*
1 2 3 4 5
3 3
    4 4
1 1 1 1 
  2


    */
