const [num, ...arr] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');

function sumArrinNum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(parseInt(arr[i]))) {
      result += +arr[i];
    }
  }

  return result;
}

const compare = (a, b) => {
  if (a.length > b.length) return 1;
  else if (a.length < b.length) return -1;
  else {
    let sumA = sumArrinNum([...a]);
    let sumB = sumArrinNum([...b]);

    if (sumA > sumB) return 1;
    else if (sumA < sumB) return -1;
    else {
      return a.localeCompare(b);
    }
  }
};

console.log(arr.sort(compare).join('\n'));
