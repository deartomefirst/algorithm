const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [j, d] = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
console.log(j.length >= d.length ? 'go' : 'no');
console.log(`.  .   .
|  | _ | _. _ ._ _  _
|/\\|(/.|(_.(_)[ | )(/.`);
