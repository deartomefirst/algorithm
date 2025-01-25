const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = +require('fs').readFileSync(filePath, 'utf-8').trim();

// function solution(n) {
//   let set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//   let selectNum = 1;
//   while (selectNum !== n) {
//     set.forEach((v) => {
//       for (let i = 2; i <= 9; i++) {
//         set.add(v * i);
//       }
//     });
//     selectNum++;
//     console.log(selectNum);
//   }
//   return set.size;
// }

function solution(n) {
  const products = new Set();

  function generateProducts(currentProduct, depth) {
    if (depth === n) {
      products.add(currentProduct);
      return;
    }

    for (let i = 1; i <= 9; i++) {
      generateProducts(currentProduct * i, depth + 1);
    }
  }

  generateProducts(1, 0); // 초기 곱은 1로 시작
  return products.size; // 고유한 곱의 개수 반환
}
console.log(solution(input));
// console.log(solution(input));
/*

9 
연산을 하고 set에 넣으면 되는 거 아니냐?

내가 구하고자 하는 input의 연산의 수보다
1 작은 연산의 수를 구하고
곱셈을 하면 되나?


연산의 수를 구하는 거지

1. 11부터의 소수와 소수의 배수들을 제거하면 된다? 

2. set의 결과들을 집어넣고 계속 계산한다. -> Set Maxsize 초과


*/
