const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...words] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

let groupWord = 0;
for (let i = 0; i < +n; i++) {
  let dic = Array(26).fill(-1);
  let isGroup = true;
  for (let j = 0; j < words[i].length; j++) {
    let idx = words[i].charCodeAt(j) - 97;

    if (dic[idx] === -1) {
      dic[idx] = j;
    } else {
      if (dic[idx] !== j - 1) {
        isGroup = false;
        break;
      } else {
        dic[idx] = j;
      }
    }
  }
  if (!isGroup) continue;
  groupWord += 1;
  // groupword인지 판별하는 방법
  // 기록을 하고 그전에 직전에 사용되었던 단어랑 같으면 상관없다. 근데 아니라면 X
  // 기록을 위해서 마지막으로 사용된 index를 기록하자!!!
}

console.log(groupWord);
