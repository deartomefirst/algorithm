const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const sortedArr = input
  .map((v) => {
    const [a, b] = v.split(' ').map(Number);
    return [a, b];
  })
  .sort((a, b) => a[0] - b[0])
  .filter((v) => v[0] - v[1] > 0);

/*

어떻게 해야 최대 이득을 볼 것인지?

9

5 0  5
10 1  9
10 5  5
20 11  9
20 15  5

*/

if (sortedArr.length === 0) {
  console.log(0);
} else {
  let maxProfit = 0;
  let lowestSalePrice = 1000001;
  for (let i = 0; i < sortedArr.length; i++) {
    let sum = 0;
    let salePrice = sortedArr[i][0];

    for (let j = i; j < sortedArr.length; j++) {
      if (sortedArr[j][1] > salePrice) continue;
      sum += salePrice - sortedArr[j][1];
    }

    if (sum > maxProfit) {
      lowestSalePrice = salePrice;
      maxProfit = sum;
    }
  }

  console.log(lowestSalePrice === 1000001 ? 0 : lowestSalePrice);
}
