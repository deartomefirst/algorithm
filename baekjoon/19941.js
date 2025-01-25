const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split('');
let canEat = 0;
for (let i = 0; i < n; i++) {
  if (arr[i] === 'P') {
    // let index = Math.max(i - k, 0);
    // while (true) {
    //   if (index === Math.min(i + k + 1, n)) break;
    //   if (arr[index] === 'H') {
    //     arr[index] = 0;
    //     canEat++;
    //     break;
    //   }
    //   index++;
    // }

    for (let j = Math.max(i - k, 0); j < Math.min(i + k + 1, n); j++) {
      if (arr[j] === 'H') {
        arr[j] = 0;
        canEat++;
        break;
      }
    }
  }
}

console.log(canEat);
