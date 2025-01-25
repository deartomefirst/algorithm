const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.trim().split(' '));

const setA = new Set(input[1]);

for (let i = 0; i < input[2].length; i++) {
  if (setA.has(input[2][i])) {
    setA.delete(input[2][i]);
  }
}
console.log(setA.size);
if (setA.size) {
  console.log(
    Array.from(setA)
      .map((v) => +v)
      .sort((a, b) => a - b)
      .join(' ')
  );
}
