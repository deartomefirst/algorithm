const [num, ...arr] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

function compare(a, b) {
  const ageA = +a.trim().split(' ')[0];
  const ageB = +b.trim().split(' ')[0];
  if (ageA < ageB) return -1;
  else if (ageA > ageB) return 1;
  return 0;
}

console.log(arr.sort(compare).join('\n').trim());


/*

sort도 좋지만
메모리가 충분하다고 가정하면
배열에 201 -> index처리를 편하게 하려고!!

*/