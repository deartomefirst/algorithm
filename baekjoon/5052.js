const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [T, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

let idx = 0;
const result = [];
for (let i = 0; i < +T; i++) {
  const n = +input[idx++];
  const phoneNumbers = [];

  for (let i = 0; i < n; i++) {
    phoneNumbers.push(input[idx++]);
  }
  phoneNumbers.sort();

  let isConsistent = true;
  for (let i = 0; i < n - 1; i++) {
    if (phoneNumbers[i + 1].startsWith(phoneNumbers[i])) {
      isConsistent = false;
      break;
    }
  }
  result.push(isConsistent ? 'YES' : 'NO');
}
console.log(result.join('\n'));

/*

1
234

5
678910


*/
