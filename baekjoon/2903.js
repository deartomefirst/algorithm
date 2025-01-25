const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const n = +require('fs').readFileSync(filePath, 'utf-8').trim();

let result = 0;
let dotNum = [0, 3];

for (let i = 2; i <= n; i++) {
  dotNum[i] = dotNum[i - 1] + dotNum[i - 1] - 1;
}

console.log(dotNum[n] * dotNum[n]);

/*


81

1 - 3
2 - 5
3 - 9
4 - 17
5 - 33



*/
