/*

obj[i] = ++obj[i] || 1; 은 괜찮은데
obj[i] = --obj[i] || -1; 은 왜 갑자기 1에서 -1이 되는지...?


*/

const [word1, word2] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .split('\n');
let letterCounter = {};

for (let i = 0; i < word1.length; i++) {
  letterCounter[word1[i]] = ++letterCounter[word1[i]] || 1;
}

for (let i = 0; i < word2.length; i++) {
  if (letterCounter[word2[i]] === undefined) {
    letterCounter[word2[i]] = -1;
  } else {
    letterCounter[word2[i]] -= 1;
  }
  // letterCounter[word2[i]] = --letterCounter[word2[i]] || -1;
}
console.log(
  Object.values(letterCounter).reduce((acc, cur) => acc + Math.abs(cur), 0)
);
