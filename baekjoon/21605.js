const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const N = +require('fs').readFileSync(filePath, 'utf-8').trim();

let answer = [];
if (N === 1) {
  console.log('-1 1');
} else {
  for (let i = 0; i < N - 1; i++) {
    answer.push('1 -1');
  }
  answer.push('-1 1');
  console.log(answer.join(' '));
}

/*

1 -1 -1 1  a2 2
1 -1 1 -1 -1 1 a3 3




*/
