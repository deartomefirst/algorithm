const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [NM, member, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.trim());
let [N, M] = NM.split(' ').map(Number);
const parties = input.map((v) => v.split(' ').map(Number));
const [num, ...knownTruth] = member.split(' ').map(Number);

const parent = Array.from({ length: N + 1 }, (_, index) => index);

function find(x) {
  if (parent[x] !== x) {
    parent[x] = find(parent[x]);
  }
  return parent[x];
}

function union(x, y) {
  const rootX = find(x);
  const rootY = find(y);
  if (rootX === 0 || rootY === 0) {
    parent[rootX] = 0;
    parent[rootY] = 0;
  } else if (rootX !== rootY) {
    parent[rootY] = rootX;
  }
}

if (num === 0) {
  console.log(M);
} else {
  knownTruth.forEach((v) => {
    parent[v] = 0;
  });
  let fakeParties = 0;
  for (let i = 0; i < M; i++) {
    const [n, ...arr] = parties[i];
    if (n === 1) continue;
    for (let j = 0; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        union(arr[j], arr[k]);
      }
    }
  }
  for (let i = 0; i < M; i++) {
    const [n, ...arr] = parties[i];
    let isFake = true;
    for (let j = 0; j < n; j++) {
      if (find(parent[arr[j]]) === 0) {
        isFake = false;
        break;
      }
    }
    if (isFake) fakeParties++;
  }
  console.log(fakeParties);
}

// for (let i = 0; i < M; i++) {}

// function countParty(n, m, member, parties) {
//   if (member === '0') return m;
//   const [num, ...arr] = member.split(' ').map(Number);
//   let knowsTruth = Array(n + 1).fill(false);
//   arr.forEach((person) => {
//     knowsTruth[person] = true;
//   });
//   let knowMember = new Set();
//   for (let i = 0; i < m; i++) {
//     let [partyNum, ...participants] = parties[i];
//     if (participants.some((person) => knowsTruth[person])) {
//       participants.forEach((person) => knowMember.add(person));
//     }
//   }
//   let count = 0;
//   parties.forEach((party) => {
//     const [partyNum, ...participants] = party;
//     if (!participants.some((person) => knowMember.has(person))) {
//       count++;
//     }
//   });
//   return count;
// }

// console.log(countParty(N, M, member, parties));
