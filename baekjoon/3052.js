const arr = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);

const restSet = new Set();
for (let i = 0; i < arr.length; i++) {
  restSet.add(arr[i] % 42);
}

console.log(restSet.size);
