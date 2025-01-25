const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const arr = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

let maxName = '';
let max = 0;

arr.forEach(v => {
  let [name, num] = v.split(' ');
  num = +num;
  if (max < num) {
    maxName = name;
    max = num;
  }
})
console.log(maxName);

