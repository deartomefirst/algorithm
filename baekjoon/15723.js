const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
let idx = 0;
let n = +input[idx++];

const dic = {};
while (n--) {
  let [subjectA, subjectB] = input[idx++].split('is').map((v) => v.trim());
  dic[subjectA] = dic[subjectA] || [];
  dic[subjectA].push(subjectB);
}
let m = +input[idx++];
let answer = [];
while (m--) {
  let visited = Array(26).fill(false);
  let [subjectA, subjectB] = input[idx++].split('is').map((v) => v.trim());
  if (subjectA === subjectB) {
    answer.push('T');
    continue;
  }
  let temp = [subjectA];
  let isTrue = false;
  while (temp.length) {
    let now = temp.pop();
    visited[now.charCodeAt() - 97] = true;
    if (!dic[now]) continue;
    for (let subject of dic[now]) {
      if (subject === subjectB) {
        isTrue = true;
        break;
      }
      if (visited[subject.charCodeAt() - 97]) continue;
      temp.push(subject);
    }
    if (isTrue) break;
  }
  answer.push(isTrue ? 'T' : 'F');
}
console.log(answer.join('\n'));
