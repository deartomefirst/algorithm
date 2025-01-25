const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const n = +input[0];
const switches = input[1].split(' ').map(Number);
const studentNum = +input[2];

for (let i = 3; i < 3 + studentNum; i++) {
  let [gender, val] = input[i].split(' ').map(Number);

  // 남자일 때 -> 배수를 모두 변경
  if (gender === 1) {
    for (let j = val; j <= n; j += val) {
      switches[j - 1] = switches[j - 1] === 1 ? 0 : 1;
    }
    // 여자일 때 -> 기준 인덱스를 기준으로
  } else {
    let distance = 1;
    switches[val - 1] = switches[val - 1] === 1 ? 0 : 1;
    while (true) {
      let left = val - 1 - distance;
      let right = val - 1 + distance;
      if (left < 0 || right >= n) break;
      if (switches[left] !== switches[right]) break;
      switches[left] = switches[left] === 1 ? 0 : 1;
      switches[right] = switches[right] === 1 ? 0 : 1;
      distance++;
    }
  }
}
let answer = [];
for (let i = 0; i < n; i += 20) {
  answer.push(switches.slice(i, i + 20).join(' '));
}
console.log(answer.join('\n'));

/*

4%에서 틀렸다고 뜨는데 무엇이 잘못된건지 모르겠다.


*/
