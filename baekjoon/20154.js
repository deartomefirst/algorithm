const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const str = require('fs').readFileSync(filePath, 'utf-8').trim();

function getStrokeCount(char) {
  const charScore = {
    A: 3,
    B: 2,
    C: 1,
    D: 2,
    E: 3,
    F: 3,
    G: 3,
    H: 3,
    I: 1,
    J: 1,
    K: 3,
    L: 1,
    M: 3,
    N: 3,
    O: 1,
    P: 2,
    Q: 2,
    R: 2,
    S: 1,
    T: 2,
    U: 1,
    V: 1,
    W: 2,
    X: 2,
    Y: 2,
    Z: 1,
  };
  return charScore[char];
}

let counts = Array.from(str).map(getStrokeCount);

while (counts.length > 1) {
  let newCounts = [];

  for (let i = 0; i < counts.length; i += 2) {
    if (i + 1 < counts.length) {
      newCounts.push((counts[i] + counts[i + 1]) % 10);
    } else {
      newCounts.push(counts[i]);
    }
  }
  counts = newCounts;
}

if (counts[0] % 2 === 0) {
  console.log("You're the winner?");
} else {
  console.log(`I'm a winner!`);
}

/*
홀짝을 구하는 문제

홀짝 - 홀
홀홀 - 짝
짝짝 - 짝



*/
