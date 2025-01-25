const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [t, n, arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const noCryTime = arr.split(' ').reduce((acc, cur) => acc + +cur, 0);
if (+t > noCryTime) {
  console.log('Padaeng_i Cry');
} else {
  console.log('Padaeng_i Happy');
}
