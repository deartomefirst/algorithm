const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const n = +input[0];
const arr = input[1].split(' ');

const set = new Set();
const duplicationSet = new Set();

for (let i = 0; i < arr.length; i++) {
  if (set.has(arr[i])) {
    duplicationSet.add(arr[i]);
  } else {
    set.add(arr[i]);
  }
}

const setArr = [...set];
const newSet = new Set();

for (let i = 0; i < setArr.length; i++) {
  for (let j = 0; j < setArr.length; j++) {
    if (i === j) continue;
    let [first, second] = [setArr[i][0], setArr[j][1]];
    newSet.add(first > second ? first : second);
  }
  if (duplicationSet.has(setArr[i])) {
    let [first, second] = [setArr[i][0], setArr[i][1]];
    newSet.add(first > second ? first : second);
  }
}

console.log(newSet.size + '\n' + [...newSet].sort().join(' '));
