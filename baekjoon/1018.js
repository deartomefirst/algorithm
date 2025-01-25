const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [size, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

let [m, n] = size.split(' ').map(Number);

const white = [
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
];

const black = [
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
];
let min = 32;
for (let x = 0; x <= m - 8; x++) {
  for (let y = 0; y <= n - 8; y++) {
    let diffWhite = 0;
    let diffBlack = 0;
    for (let i = x; i < x + 8; i++) {
      for (let j = y; j < y + 8; j++) {
        if (input[i][j] !== white[i - x][j - y]) {
          diffWhite += 1;
        }
      }
    }
    for (let i = x; i < x + 8; i++) {
      for (let j = y; j < y + 8; j++) {
        if (input[i][j] !== black[i - x][j - y]) {
          diffBlack += 1;
        }
      }
    }
    min = Math.min(min, diffBlack, diffWhite);
  }
}
console.log(min);
