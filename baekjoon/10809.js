const input = require('fs').readFileSync('input.txt').toString().trim();

let result = Array(26).fill(-1);
for (let i = 0; i < input.length; i++) {
  if (result[input[i].codePointAt() - 97] === -1) {
    result[input[i].codePointAt() - 97] = i;
  }
}
console.log(result.join(' '));
