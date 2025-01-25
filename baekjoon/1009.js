const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [T, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const powResult = {
  0: [10],
  1: [1],
  2: [2, 4, 8, 6],
  3: [3, 9, 7, 1],
  4: [4, 6],
  5: [5],
  6: [6],
  7: [7, 9, 3, 1],
  8: [8, 4, 2, 6],
  9: [9, 1],
};

const answer = [];
for (let i = 0; i < T; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  let last = a % 10;
  const rest = (b - 1) % powResult[last].length;
  answer.push(powResult[last][rest]);
}
console.log(answer.join('\n'));
/*
1 1 1
2 4 8 6 2
3 9 7 1 3
4 6 4 6
5 5 5
6 6 6
7 9 3 1 7
8 4 2 6 8
9 1 9 1
*/
