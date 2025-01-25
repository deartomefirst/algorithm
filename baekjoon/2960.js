const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [N, K] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map((v) => +v);

let prime = Array(N + 1).fill(true);
for (let i = 2; i <= N; i++) {
  if (!prime[i]) continue;
  prime[i] = false;
  K--;
  console.log(prime, i);
  if (K === 0) {
    console.log(i);
    break;
  }
  for (let j = i * i; j <= N; j += i) {
    if (!prime[j]) continue;
    prime[j] = false;
    K--;
    console.log(prime, j);
    if (K === 0) {
      console.log(j);
      break;
    }
  }
}


// 루트로 하는 방법도 확인하기

/*

#include <bits/stdc++.h>
using namespace std;

bool ft_prime(int nb)
{
	if (nb == 1)
		return (0);
	for (int i = 2; i <= nb / i; ++i)
		if (nb % i == 0)
			return (0);
	return (1);
}

int main(void)
{
	int n;

	while (1)
	{
		cin >> n;
		if (n == 0)
			break;

		int cnt = 0;

		for (int i = n + 1; i <= (2 * n); ++i)
			if (ft_prime(i))
				cnt++;
		cout << cnt << "\n";
	}
	return (0);
}


*/