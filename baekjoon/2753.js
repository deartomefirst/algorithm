const year = +require('fs').readFileSync('input.txt').toString().trim();

console.log((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 1 : 0);
