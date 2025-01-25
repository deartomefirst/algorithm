const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
  if (input[0] > 0) {
    if (input[1] > 0) console.log(1);
    if (input[1] < 0) console.log(4);
  } else {
    if (input[1] > 0) console.log(2);
    if (input[1] < 0) console.log(3);
  }
  process.exit();
});
