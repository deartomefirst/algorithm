const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [KS, str] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [k, s] = KS.split(' ').map(Number);

const small = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const capital = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
// a 97 z 122 A 65 Z 90
let answer = [];

for (let i = 0; i < s; i++) {
  let char = str[i].charCodeAt();
  if (char >= 65 && char <= 90) {
    if (char + k > 90) {
      answer.push(capital[(char + k - 65) % 26]);
    } else {
      answer.push(String.fromCharCode(char + k));
    }
  } else if (char >= 97 && char <= 122) {
    if (char + k > 122) {
      answer.push(small[(char + k - 97) % 26]);
    } else {
      answer.push(String.fromCharCode(char + k));
    }
  } else {
    answer.push(str[i]);
  }
}

console.log(answer.join(''));
