const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const N = +n;
const arr = input.map((v) => v.split(' ').map(Number));

let isSelected = Array(n).fill(false);
let team = [];
let result = [];
function makeTeam(k) {
  if (k === N / 2) {
    result.push([...team]);
    return;
  }

  let start = k !== 0 ? team[k - 1] + 1 : 0;
  for (let i = start; i < N; i++) {
    if (!isSelected[i]) {
      team[k] = i;
      isSelected[i] = true;
      makeTeam(k + 1);
      isSelected[i] = false;
    }
  }
}
makeTeam(0);
const length = result.length;
let min = 2000;
for (let i = 0; i < length / 2; i++) {
  let aScore = 0;
  let bScore = 0;
  const aTeam = result[i];
  const bTeam = result[length - i - 1];
  for (let j = 0; j < aTeam.length - 1; j++) {
    for (let k = j + 1; k < aTeam.length; k++) {
      aScore += arr[aTeam[j]][aTeam[k]] + arr[aTeam[k]][aTeam[j]];
      bScore += arr[bTeam[j]][bTeam[k]] + arr[bTeam[k]][bTeam[j]];
    }
  }

  if (Math.abs(aScore - bScore) < min) {
    min = Math.abs(aScore - bScore);
    if (min === 0) break;
  }
}
console.log(min);

// 팀을 2번
