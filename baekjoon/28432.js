const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

let idx = 0;
const N = +input[idx++];
let words = new Set();
let start, finish;
if (N === 1) {
  console.log(input.at(-1));
} else {
  while (idx <= N) {
    if (input[idx] === '?') {
      if (idx === 1) {
        finish = input[idx + 1][0];
      } else if (idx === N) {
        start = input[idx - 1].at(-1);
      } else {
        start = input[idx - 1].at(-1);
        finish = input[idx + 1][0];
      }
    } else {
      words.add(input[idx]);
    }
    idx++;
  }

  let M = +input[idx++];

  while (idx < input.length) {
    if (words.has(input[idx])) {
      idx++;
      continue;
    }

    if (start === undefined) {
      if (input[idx].at(-1) === finish) {
        console.log(input[idx]);
        break;
      }
    } else if (finish === undefined) {
      if (input[idx][0] === start) {
        console.log(input[idx]);
        break;
      }
    } else {
      if (input[idx][0] === start && input[idx].at(-1) === finish) {
        console.log(input[idx]);
        break;
      }
    }
    idx++;
  }
}

/*

계획을 세우자.

시작하는 부분에 위치할 때
끝에 위치할 때
는 다르게 처리해야 한다.

중복되는 단어는 피할 수 있도록 set을 사용해서 여부를 확인해준다.


*/
