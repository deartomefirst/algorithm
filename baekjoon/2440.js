const num = +require('fs').readFileSync('input.txt').toString().trim();
let result = '';
for (let i = num; i > 0; i--) {
  let tmp = '*'.repeat(i);
  result += `${tmp}\n`;
}
console.log(result.trim());
