const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const score = require('fs').readFileSync(filePath, 'utf-8').trim();

if (score === 'A+') console.log('4.3');
if (score === 'A0') console.log('4.0');
if (score === 'A-') console.log('3.7');
if (score === 'B+') console.log('3.3');
if (score === 'B0') console.log('3.0');
if (score === 'B-') console.log('2.7');
if (score === 'C+') console.log('2.3');
if (score === 'C0') console.log('2.0');
if (score === 'C-') console.log('1.7');
if (score === 'D+') console.log('1.3');
if (score === 'D0') console.log('1.0');
if (score === 'D-') console.log('0.7');
if (score === 'F') console.log('0.0');
