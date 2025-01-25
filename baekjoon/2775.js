// dp
/*


1층 3호에 사는 사람들

0층 1호 0층 2호 0층 3호

2층 3호
1층 1호 1층 2호 3층 3호
[1, 2, 3, 1, 3, 6, 1, 4, 10]
3%3 0
4%3 1

1 2 3 4 5
1 3 6 10 15
1 4 10 15 30
1 5 15 30 60


기준을 안바뀌게... 변수로 빼서 해야할듯..?
*/
const input = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n')
  .map((v) => +v);
let dp = [[0]];

for (let i = 0; i < input[0]; i++) {
  let floorNum = input[2 * i + 1];
  let roomNum = input[2 * i + 2];
  const house = Array.from(Array(floorNum + 1), () =>
    Array(roomNum + 1).fill(0)
  );

  for (let i = 1; i <= roomNum; i++) {
    house[0][i] = i;
  }

  for (let i = 1; i <= floorNum; i++) {
    for (let j = 1; j <= roomNum; j++) {
      house[i][j] = house[i - 1][j] + house[i][j - 1];
    }
  }
  console.log(house[floorNum][roomNum]);
}
