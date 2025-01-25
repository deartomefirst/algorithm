const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const [N, S, R] = input[0].split(' ').map(Number);
const broken = new Set(input[1].split(' ').map(Number));
const extra = new Set(input[2].split(' ').map(Number));

for (const num of extra) {
  if (broken.has(num)) {
    broken.delete(num);
    extra.delete(num);
  }
}

for (const num of extra) {
  if (broken.has(num - 1)) {
    broken.delete(num - 1);
    extra.delete(num - 1);
  } else if (broken.has(num + 1)) {
    broken.delete(num + 1);
    extra.delete(num + 1);
  }
}

console.log(broken.size);

/*
앞에서부터 여유분을 주면서 시작하면 괜찮을지도?.?


*/
