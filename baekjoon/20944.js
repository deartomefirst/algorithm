const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let n = Number(require('fs').readFileSync(filePath, 'utf-8').trim());
console.log('a'.repeat(n));
