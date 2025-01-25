const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [p, s] = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
