const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [N, k, l] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

let round = 1;
while (true) {
  if (Math.ceil(k / 2) === Math.ceil(l / 2)) break;
  k = Math.ceil(k / 2);
  l = Math.ceil(l / 2);
  round++;
}
console.log(round);

/*

  1 2 3 4 ... 16
  
  12 34 56 78 910 1112 1314 1516





*/
