const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const vowel = /[aeiou]/i;
const set = new Set(['a', 'e', 'i', 'o', 'u']);
const isGoodPassword = (str) => {
  if (!vowel.test(str)) return false;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      let duo = str.slice(i, i + 2);
      if (duo === 'ee' || duo === 'oo') continue;
      else return false;
    }
    if (i + 2 < str.length) {
      if (set.has(str[i]) && set.has(str[i + 1]) && set.has(str[i + 2]))
        return false;
      if (!set.has(str[i]) && !set.has(str[i + 1]) && !set.has(str[i + 2]))
        return false;
    }
  }
  return true;
};

let answer = [];
for (let i = 0; i < input.length - 1; i++) {
  answer.push(isGoodPassword(input[i]));
}
console.log(
  answer
    .map((v, i) => `<${input[i]}> is ${v ? 'acceptable.' : 'not acceptable.'}`)
    .join('\n')
);
