const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nm, input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const [n, m] = nm.split(' ').map(Number);
const arr = input.split(' ').map(Number);
let numQueue = Array(n)
  .fill(0)
  .map((v, i) => i + 1);

let operationNum = 0;

for (let i = 0; i < m; i++) {
  let targetNum = arr[i];
  if (numQueue[0] === targetNum) {
    numQueue.shift();
    continue;
  }
  let targetIdx = numQueue.indexOf(targetNum);
  if (targetIdx <= Math.floor(numQueue.length / 2)) {
    let rest = numQueue.splice(0, targetIdx);
    numQueue.shift();
    numQueue = [...numQueue, ...rest];
    operationNum += rest.length;
  } else {
    let rest = numQueue.splice(targetIdx + 1);
    numQueue.pop();
    numQueue = [...rest, ...numQueue];
    operationNum += rest.length + 1;
  }
}
console.log(operationNum);
/*



*/
