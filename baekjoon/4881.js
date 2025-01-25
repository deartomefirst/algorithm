const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const arr = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

let answer = [];

for (let i = 0; i < arr.length - 1; i++) {
  answer.push(findSameLength(arr[i][0], arr[i][1]));
}

function findSameLength(a, b) {
  if (a === b) return `${a} ${b} ${2}`;

  let idxA = 1;
  let idxB = 1;
  let lastA = a;
  let lastB = b;
  const dicA = new Map();
  const dicB = new Map();
  dicA.set(a, idxA++);
  dicB.set(b, idxB++);
  while (true) {
    let newA = [...lastA.toString()].reduce(
      (prev, val) => prev + +val * +val,
      0
    );
    if (dicA.get(newA) > 0) break;
    dicA.set(newA, idxA++);
    lastA = newA;
  }
  while (true) {
    let newB = [...lastB.toString()].reduce(
      (prev, val) => prev + +val * +val,
      0
    );
    if (dicB.get(newB) > 0) break;
    dicB.set(newB, idxB++);
    lastB = newB;
  }

  let minLength = 1000000000;
  for (let key in dicA) {
    if (dicB.get(key) !== undefined) {
      minLength = Math.min(minLength, dicA.get(key) + dicB.get(key));
    }
  }
  return `${a} ${b} ${minLength === 1000000000 ? 0 : minLength}`;
}

findSameLength(arr[2][0], arr[2][1]);

console.log(answer.join('\n'));
