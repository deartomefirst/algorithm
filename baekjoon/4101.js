const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

for (let i = 0; i < input.length - 1; i++) {
  let [first, second] = input[i].split(' ').map(Number);
  if (first > second) {
    console.log('Yes');
  } else {
    console.log('No')
  }
}