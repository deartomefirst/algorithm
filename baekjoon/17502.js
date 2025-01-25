const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [num, str] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
num = +num;
str = str.split('');
for (let i = 0; i < num / 2; i++) {
  if (str[i] !== '?' || str[num - i - 1] !== '?') {
    let value = str[i] === '?' ? str[num - i - 1] : str[i];
    str[i] = value;
    str[num - i - 1] = value;
  } else {
    str[i] = str[num - i - 1] = 'a';
  }
}
if (str.length === 1 && str[0] === '?') console.log('a');
else console.log(str.join(''));
