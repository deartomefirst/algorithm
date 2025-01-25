const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const str = require('fs').readFileSync(filePath, 'utf-8').trim();

const gather = ['a', 'i', 'y', 'e', 'o', 'u'];
const consonant = [
  'b',
  'k',
  'x',
  'z',
  'n',
  'h',
  'd',
  'c',
  'w',
  'g',
  'p',
  'v',
  'j',
  'q',
  't',
  's',
  'r',
  'l',
  'm',
  'f',
];
// 65 90 97 122
function ROT13ToEnglish(str) {
  let arr = [...str];
  for (let i = 0; i < arr.length; i++) {
    let charCode = arr[i].charCodeAt();
    if (charCode < 65 || charCode > 122) continue;
    if (charCode >= 91 && charCode <= 96) continue;
    let isUpper = charCode < 97;
    let lowerCase = arr[i].toLowerCase();
    // 모음 배열에 있으면
    if (gather.indexOf(lowerCase) !== -1) {
      arr[i] = gather[(gather.indexOf(lowerCase) + 3) % 6];
    } else {
      arr[i] = consonant[(consonant.indexOf(lowerCase) + 10) % 20];
    }
    arr[i] = isUpper ? arr[i].toUpperCase() : arr[i];
  }
  return arr.join('');
}
console.log(ROT13ToEnglish(str));
