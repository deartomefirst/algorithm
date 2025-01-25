const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const [M, N, H] = input.shift().split(' ').map(Number);

let arr = [];
for (let i = 0; i < H; i++) {
  let floor = [];
  for (let j = 0; j < N; j++) {
    floor.push(input[N * i + j].split(' ').map(Number));
  }
  arr.push(floor);
}

let dx = [1, 0, 0, -1, 0, 0];
let dy = [0, 1, 0, 0, -1, 0];
let dz = [0, 0, 1, 0, 0, -1];

function solution() {
  let temp = [];
  let goodTomatoNum = 0;
  let notTomatoNum = 0;
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < M; k++) {
        if (arr[i][j][k] === 1) {
          temp.push([i, j, k]);
          goodTomatoNum++;
        }
        if (arr[i][j][k] === -1) {
          notTomatoNum++;
        }
      }
    }
  }

  if (goodTomatoNum + notTomatoNum === M * N * H) return 0;

  let index = 0;
  let max = 1;
  while (temp.length > index) {
    let [x, y, z] = temp[index++];

    for (let i = 0; i < 6; i++) {
      let newX = x + dx[i];
      let newY = y + dy[i];
      let newZ = z + dz[i];

      if (
        newX < 0 ||
        newY < 0 ||
        newZ < 0 ||
        newX >= H ||
        newY >= N ||
        newZ >= M
      )
        continue;
      if (arr[newX][newY][newZ] !== 0) continue;
      arr[newX][newY][newZ] = arr[x][y][z] + 1;
      max = Math.max(arr[newX][newY][newZ], max);
      temp.push([newX, newY, newZ]);
    }
  }

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < M; k++) {
        if (arr[i][j][k] === 0) {
          return -1;
        }
      }
    }
  }

  return max - 1;
}
console.log(solution());
