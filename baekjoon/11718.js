const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [num, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

for (let i = 0; i < num; i++) {
  console.log(input[i].at(0) + input[i].at(-1));
}
