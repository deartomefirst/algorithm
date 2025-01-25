const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const T = +input[0];
let answer = [];
for (let i = 1; i <= T; i++) {
  const N = +input[2 * i - 1];
  const rank = input[2 * i].split(' ').map(Number);

  const team = {};

  for (let i = 0; i < N; i++) {
    team[rank[i]] = team[rank[i]] || 0;
    team[rank[i]]++;
  }

  
  let teamScore = Array(Object.keys(team).length + 1).fill(0);
  let team5rank = Array(Object.keys(team).length + 1).fill(0);
  let rankingTeam = new Set();

  for (const teamNum in team) {
    if (team[teamNum] >= 6) {
      rankingTeam.add(+teamNum);
    }
  }
  let rankNum = 1;
  let counter = Array(teamScore.length).fill(0);
  for (let i = 0; i < N; i++) {
    let teamNum = rank[i];
    if (rankingTeam.has(teamNum) && counter[teamNum] < 4) {
      teamScore[teamNum] += rankNum;
      counter[teamNum]++;
    } else if (rankingTeam.has(teamNum) && counter[teamNum] === 4) {
      team5rank[teamNum] = rankNum;
      counter[teamNum]++;
    }
    if (rankingTeam.has(teamNum)) {
      rankNum++;
    }
  }

  let minValue = Math.min(...teamScore.filter((n) => n !== 0));
  let minIndexArr = [];

  for (let i = 0; i < teamScore.length; i++) {
    if (teamScore[i] === minValue) minIndexArr.push(i);
  }

  if (minIndexArr.length === 1) {
    answer.push(minIndexArr[0]);
  } else {
    let min = 1001;
    let minIdx;
    for (let i = 0; i < minIndexArr.length; i++) {
      if (team5rank[minIndexArr[i]] < min) {
        min = team5rank[minIndexArr[i]];
        minIdx = minIndexArr[i];
      }
    }
    answer.push(minIdx);
  }
}
console.log(answer.join('\n'));
