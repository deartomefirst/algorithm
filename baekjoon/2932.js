const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n, k], ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const data = [];
for (let i = 0; i < k; i++) {
  let [X, R, C] = input[i];
  data.push([X, Math.floor((X - 1) / n), (X - 1) % n, R - 1, C - 1]);
}

function moveNum(now, t, N) {
  let moved = 0;
  if (now <= t) {
    moved += t - now;
  } else {
    moved += N - now;
    moved += t;
  }
  return moved;
}

function turnTable(idx) {
  let turn = 0;

  let [x, rNow, cNow, rTarget, cTarget] = data[idx];

  let rMove = moveNum(rNow, rTarget, n);
  let cMove = moveNum(cNow, cTarget, n);
  turn = turn + rMove + cMove;

  for (let i = idx + 1; i < k; i++) {
    if (data[i][0] === x) {
      data[i][1] = rTarget;
      data[i][2] = cTarget;
    } else {
      if (data[i][1] === rNow) {
        data[i][2] += cMove;
        if (data[i][2] >= n) {
          data[i][2] = data[i][2] % n;
        }
      }
      if (data[i][2] === cTarget) {
        data[i][1] += rMove;
        if (data[i][1] >= n) {
          data[i][1] = data[i][1] % n;
        }
      }
    }
  }
  return turn;
}
let answer = [];
for (let i = 0; i < k; i++) {
  answer.push(turnTable(i));
}
console.log(answer.join('\n'));
/*

숫자를 옮겼음
다른 숫자들도 섞이잖아
돌아간 숫자의 위치를 어떻게 알아?
그냥 다 확인 하는 수 밖에 없지 않나..?



fun main() = with(System.`in`.bufferedReader()) {
    val (N, M) = readLine().split(" ").map { it.toInt() }

	// 목표 위치 저장(최종적으로 어디로 보내야 하는지)
    var RClist = Array(M) { shortArrayOf(0, 0) }

    var matrix_r = IntArray(1000)
    var matrix_c = IntArray(1000)

    for (i in 0 until M) {
        val (X, R, C) = readLine().split(" ").map { it.toInt() }
        RClist[i] = shortArrayOf((R - 1).toShort(), (C - 1).toShort())

        // 입력받은 값의 초기 r위치 저장
        matrix_r[i] = (X - 1) / N
        // 입력받은 값의 초기 c위치 저장
        matrix_c[i] = (X - 1) % N
    }

	// r값을 기준으로 행렬을 회전시킬 때 영향을 받는 다른 수가 있는지 확인해야 한다
	// 있을 경우 그 수도 회전시켜주고 최종 위치를 저장해 주어야 함
    fun RotateRow(r: Int, p: Int) {
        for (i in 0 until M) {
            if (matrix_r[i] == r) {
                matrix_c[i] = (matrix_c[i] + p) % N
            }
        }
    }

	// RotateRow()와 동일
    fun RotateColumn(c: Int, p: Int) {
        for (i in 0 until M) {
            if (matrix_c[i] == c) {
                matrix_r[i] = (matrix_r[i] + p) % N
            }
        }
    }

    for (i in 0 until M) {
		// 목표 위치까지 얼마나 움직여야 하는지 저장
        var r_move = RClist[i][0] - matrix_r[i]
        var c_move = RClist[i][1] - matrix_c[i]
		// OutOfRange일 때 N을 더해서 범위 안으로 넣어준다(회전하기 때문)
        if (r_move < 0) r_move += N
        if (c_move < 0) c_move += N

        RotateRow(matrix_r[i], c_move)
        RotateColumn(matrix_c[i], r_move)

        println(r_move + c_move)
    }
}
출처: https://dev-sia.tistory.com/42 [sia's log:티스토리]

*/
