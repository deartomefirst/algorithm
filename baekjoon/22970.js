const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const N = +input[0];
const mountain = input[1].split(' ').map(Number);
let longest = 1;
let nowLength = 1;
let isDown = false;
let lastHeight = mountain[0];
for (let i = 1; i < N; i++) {
  if (lastHeight === mountain[i]) {
    nowLength = 1;
    continue;
  }

  if (lastHeight > mountain[i]) {
    isDown = true;
    nowLength++;
  } else {
    // 감소하고 있다가 커지는 경우
    if (isDown) {
      nowLength = 2;
      isDown = false;
      // 그냥 커지는 경우
    } else {
      nowLength++;
    }
  }
  lastHeight = mountain[i];
  longest = Math.max(longest, nowLength);
}

console.log(longest);

/*




*/
