const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [nq, arr, qArr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [N, Q] = nq.split(' ').map(Number);
arr = arr.split(' ').map(Number);
qArr = qArr.split(' ').map(Number);

let result = [];
let answer = [];

for (let i = 0; i < N; i++) {
  result.push(
    arr[i % N] * arr[(i + 1) % N] * arr[(i + 2) % N] * arr[(i + 3) % N]
  );
}

for (let i = 0; i < Q; i++) {
  let idx = qArr[i] - 1;
  let idxArr = [idx - 3, idx - 2, idx - 1, idx].map((v) => {
    if (v < 0) {
      return (v + N) % N;
    }
    return v;
  });
  let idxSet = new Set(idxArr);

  for (let i = 0; i < result.length; i++) {
    if (idxSet.has(i)) {
      result[i] = -result[i];
    }
  }

  answer.push(result.reduce((acc, v) => acc + v, 0));

  // 3이면 2가 된다.
  // 2번 인덱스에 위치한 값을 포함한 연산을 모두 부호를 바꿔준다.
  // i번 인덱스가 포함된 연산의 결과는 i-3 i-2 i-1 i
  // 0 1 2 3 , 1 2 3 4 , 2 3 4 5,
}

console.log(answer.join('\n'));

/*


계산을 여러번 해야하나요...?

계산한 결과를 저장한 배열을 만들자.




*/
