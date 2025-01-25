const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [subin, sister] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

let visited = Array(100001).fill(-1);
let countArr = Array(100001).fill(0);
let queue = [];

function findSister(start, finish) {
  if (start >= finish) return [start - finish, 1];

  visited[finish] = 0;
  queue.push(finish);
  let count = 0;
  while (queue.length !== 0) {
    let current = queue.shift();

    let minus = current - 1;
    let plus = current + 1;
    let half = Math.floor(current / 2);
    let next = current % 2 === 0 ? [minus, plus, half] : [minus, plus];

    next.forEach((v) => {
      if (visited[v] === -1) {
        queue.push(v);
        visited[v] = visited[current] + 1;
      }
    });

    if (current % 2 === 0 && visited[half] === -1) {
      visited[half] = visited[current] + 1;
      if (half !== start) {
        queue.push(half);
      } else {
        count++;
      }
    }
    if (visited[minus] === -1) {
      visited[minus] = visited[current] + 1;
      if (minus !== start) {
        queue.push(minus);
      } else {
        count++;
      }
    }
    if (visited[plus] === -1) {
      visited[plus] = visited[current] + 1;
      if (plus !== start) {
        queue.push(plus);
      } else {
        count++;
      }
    }
    console.log(queue);
  }

  // const startValue = visited[start];
  // while (true) {
  //   let now = queue.shift();
  //   if (visited[now] + 1 === startValue) {
  //     if (now - 1 === start) count++;
  //     if (now + 1 === start) count++;
  //     if (now / 2 === start) count++;
  //   } else {
  //     break;
  //   }
  // }

  return [visited[start], count];
}
console.log(findSister(subin, sister).join('\n'));
