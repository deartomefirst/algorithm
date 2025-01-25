const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const startNum = Number(require('fs').readFileSync(filePath, 'utf-8').trim());

function calculateCycle(num) {
  let now = num;
  let cycle = 0;
  do {
    if (now < 10) {
      now = now * 10 + now;
    } else {
      now = 10 * (now % 10) + ((Math.floor(now / 10) + (now % 10)) % 10);
    }
    cycle++;
  } while (num !== now);

  return cycle;
}

console.log(calculateCycle(startNum));
