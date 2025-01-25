const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

let daysOneGuest = 0;
let maxGuestsOneDay = 0;
let daysWithoutFights = 0;
let maxGuestsOnNoFightDay = 0;
let longestDuration = 0;

let year = Array(367).fill(0);
let visited = Array(367).fill(0);
for (let i = 0; i < +n; i++) {
  let [type, start, finish] = input[i].split(' ');
  start = +start;
  finish = +finish;
  if (type === 'T') {
    for (let j = start; j <= finish; j++) {
      year[j] += 1;
      visited[j] += 1;
    }
  } else {
    for (let j = start; j <= finish; j++) {
      year[j] -= 1;
      visited[j] += 1;
    }
  }
  longestDuration = Math.max(longestDuration, finish - start + 1);
}

maxGuestsOneDay = Math.max(...visited);

for (let i = 1; i <= 366; i++) {
  if (visited[i] > 0) {
    daysOneGuest += 1;
  }
  if (year[i] === 0 && visited[i] > 0) {
    daysWithoutFights += 1;
  }
  if (year[i] === 0) {
    maxGuestsOnNoFightDay = Math.max(maxGuestsOnNoFightDay, visited[i]);
  }
}

console.log(`${daysOneGuest}
${maxGuestsOneDay}
${daysWithoutFights}
${maxGuestsOnNoFightDay}
${longestDuration}
`);
