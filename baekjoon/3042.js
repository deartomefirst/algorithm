const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const n = +input[0];
const arr = input.slice(1).map((v) => v.split(''));
const vec = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] !== '.') {
      vec.push([i, j]);
    }
  }
}
let answer = 0;
for (let x = 0; x < vec.length; x++) {
  for (let y = x + 1; y < vec.length; y++) {
    for (let z = y + 1; z < vec.length; z++) {
      const m1 = vec[y][0] - vec[x][0];
      const m2 = vec[y][1] - vec[x][1];
      const m3 = vec[z][0] - vec[y][0];
      const m4 = vec[z][1] - vec[y][1];

      const a = m2 * m3;
      const b = m1 * m4;

      if (a === b) {
        answer++;
      }
    }
  }
}
console.log(answer);
// 갸로, 세로

// 대각선

/*

직선을 이루는 
한 직선에 여러개가 생길 수도 있다.

한 선분에 

i+j = 0~ 2*(n-1)

00 01 02 03
10 11 12 13
20 21 22 23
30 31 32 33

for(let n = 0; n <= 2*(n-1); n++) {

}




*/
