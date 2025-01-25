const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [t, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

for (let i = 0; i < t; i++) {
  let [n, targetIdx] = input[i * 2].split(' ').map(Number);
  let arr = input[i * 2 + 1].split(' ').map(Number);
  while (arr.length !== 0) {
    let mostImportance = Math.max(...arr);
    if (arr[0] === mostImportance && targetIdx === 0) {
      arr.shift();
      break;
    } else if (arr[0] === mostImportance && targetIdx !== 0) {
      arr.shift();
      targetIdx -= 1;
    } else {
      let temp = arr.shift();
      arr.push(temp);
      if (targetIdx === 0) {
        targetIdx = arr.length - 1;
      } else {
        targetIdx -= 1;
      }
    }
  }
  console.log(n - arr.length);
}
