const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const arr = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => +v);

let user = 1;
let index = 0;

while (arr[index] !== 0) {
  let pedometer = arr[index];
  index++;
  let num = arr[index];
  index++;
  console.log('User ' + user++);
  for (let i = index; i < index + num; i++) {
    console.log(((pedometer * arr[i]) / 100000).toFixed(5));
  }
  index += num;
}
