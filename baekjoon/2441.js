const num = +require('fs').readFileSync('input.txt').toString().trim();
let result = '';
for (let i = num; i > 0; i--) {
  let temp = '';
  // temp += ' '.repeat(num - i);
  // temp += '*'.repeat(i);
  // result += `${temp}\n`;
  result += ' '.repeat(num - i) + '*'.repeat(i) + '\n';
}
console.log(result.trim());

/*

for (le)


*/
