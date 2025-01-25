// 10진수, 12진수, 16진수로 나타낸 다음에

for (let i = 1000; i <= 9999; i++) {
  let duoDecimal = i.toString(12);
  let hexaDecimal = i.toString(16);

  let sum = i
    .toString(10)
    .split('')
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
  let duoSum = duoDecimal
    .split('')
    .reduce((acc, cur) => acc + parseInt(cur, 12), 0);
  let hexaSum = hexaDecimal
    .split('')
    .reduce((acc, cur) => acc + parseInt(cur, 16), 0);
  if (sum === duoSum && duoSum === hexaSum) console.log(i);
}
