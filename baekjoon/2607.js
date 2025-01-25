const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, word, ...arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const dic = {};
for (let i = 0; i < word.length; i++) {
  dic[word[i]] = (dic[word[i]] || 0) + 1;
}
let answer = +n - 1;
for (let i = 0; i < +n - 1; i++) {
  let newWord = arr[i];
  if (word.length - 2 >= newWord.length) {
    answer--;
    continue;
  }
  let newDic = { ...dic };
  let deleteCounter = 0;
  for (let j = 0; j < newWord.length; j++) {
    if (newDic[newWord[j]] === undefined || newDic[newWord[j]] === 0) {
      deleteCounter++;
    } else {
      newDic[newWord[j]]--;
    }
  }
  if (deleteCounter === 1 && newWord.length === word.length - 1) {
    answer--;
  }
  if (deleteCounter > 1) {
    answer--;
  }
}
console.log(answer);
