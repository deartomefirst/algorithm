const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [t, ...arr] = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const T = Number(t);
const answer = [];
for (let i = 0; i < T; i++) {
  const [N, X, Y] = arr[i * 2].split(' ').map(Number);
  const vArr = arr[i * 2 + 1].split(' ').map(Number);
  
  let min = X;

  for (let i = 0; i < N-1; i++) {
    min = Math.min(min, X / vArr[i]);
  }
  if ( (X / vArr[N - 1]) < min) {
    answer.push(0);
  } else if( ((X-Y)/vArr[N-1])+1 >= min  ) {
    answer.push(-1);
  } else {
    let length = 1;
    while (true) {
      
      let rest = X - length;
      if (min > (rest / vArr[N - 1]) + 1) {
        answer.push(length);
        break;
      }
      length++;
    }
  }
}
console.log(answer.join('\n'));