const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim();

/*



*/
let dic = new Set();
for (let i = 1; i <= input.length; i++) {
  for (let j = 0; j <= input.length - i; j++) {
    dic.add(input.slice(j, j + i));
  }
}
console.log(dic.size);
