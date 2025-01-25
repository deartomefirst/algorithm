const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const N = +input[0];
const menuArr = input[1].split(' ').map(Number);

const set = new Set();
let max = 0;
let now = 0;
for (let i = 0; i < menuArr.length; i++) {
  if (!set.has(menuArr[i])) {
    set.add(menuArr[i]);
    now++;
  } else {
    set.delete(menuArr[i]);
    now--;
  }
  max = Math.max(max, now);
}
console.log(max);
/*

1 - 1
1 3 - 2
1 - 1
2 - 2



*/
