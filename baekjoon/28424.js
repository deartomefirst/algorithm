const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const [n, q] = input[0];
const tolerance = [0];

for (let i = 1; i <= n; i++) {
  tolerance.push(Number(input[i]));
}
const first = [...tolerance];
let isDrunk = n;
const answer = [];
for (let j = n + 1; j < input.length; j++) {
  let [type, ...arr] = input[i].split(' ').map(Number);
  if (type === 1) {
    //
    let remain = arr[0];
    let now = arr[1];

    while (remain !== 0 || isDrunk !== 0) {
      // 주량이 남아서 더 마실 수 있을 때
      if (tolerance[now] !== 0) {
        


      } else {
        now = now + 1 > n ? 1 : now + 1;
      }
    }
  } else {
    answer.push(first[arr[0]] - tolerance[arr[0]]);
  }
}
