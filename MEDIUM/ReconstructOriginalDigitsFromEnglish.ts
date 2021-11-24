/*
423. Given a string s containing an out-of-order English representation of digits 0-9, return the digits in ascending order.

Input: s = "owoztneoer"
Output: "012"
Input: s = "fviefuro"
Output: "45"
*/

/**
 * z -> 0
 * w -> 2
 * u -> 4
 * x -> 6
 * g -> 8
 * f - count(4) -> 5
 * s - count(6) -> 7
 * t - count(2) - count(8) -> 3
 * i - count(5) - count(8) - count(6) -> 9
 * o - count(0) - count(2) - count(4) -> 1
 */
function originalDigits(s: string): string {
	function updatestore(
		cur: string,
		index: number,
		store: Map<number, number>,
		sumOfMinus: number = 0
	) {
		let count = s.split('').reduce((prev, item, i) => {
			if (item === cur) prev++;
			return prev;
		}, 0);
		store.set(index, count - sumOfMinus);
	}
	function countEven(store: Map<number, number>, letters: string[]) {
		letters.forEach((cur, index) => {
			updatestore(cur, index * 2, store, 0);
		});
	}
	function countOdd(store: Map<number, number>, letters: string[]) {
		letters.forEach((cur, index) => {
			switch (cur) {
				case 'f':
					updatestore(cur, index * 2 + 1, store, store.get(4));
					break;
				case 's':
					updatestore(cur, index * 2 + 1, store, store.get(6));
					break;
				case 't':
					updatestore(cur, index * 2 + 1, store, store.get(2) + store.get(8));
					break;
				case 'i':
					updatestore(
						cur,
						index * 2 + 1,
						store,
						store.get(5) + store.get(6) + store.get(8)
					);
					break;
				case 'o':
					updatestore(
						cur,
						index * 2 + 1,
						store,
						store.get(0) + store.get(2) + store.get(4)
					);
					break;
			}
		});
	}
	const evens = ['z', 'w', 'u', 'x', 'g'],
		odds = ['o', 't', 'f', 's', 'i'];
	let store: Map<number, number> = new Map(),
		result: string = '';
	Array(10)
		.fill(0)
		.map((cur, index) => index)
		.forEach((cur, index) => {
			store.set(cur, 0);
		});
	countEven(store, evens);
	countOdd(store, odds);
	store.forEach((value, key) => {
		if (value !== 0) {
			result += key.toString().repeat(value);
		}
	});
	return result;
}

function originalDigitsBetter(s: string): string {
	const map = new Map<string, number>(), counts = new Array(10).fill(0);
	for (const char of s) {
		if (!map.has(char)) map.set(char, 0);
		map.set(char, map.get(char) + 1);
	}
	counts[0] = map.get('z') ?? 0;
	counts[2] = map.get('w') ?? 0;
	counts[4] = map.get('u') ?? 0;
	counts[6] = map.get('x') ?? 0;
	counts[8] = map.get('g') ?? 0;

	counts[1] = (map.get('o') ?? 0) - counts[0] - counts[2] - counts[4];
	counts[3] = (map.get('h') ?? 0) - counts[8];
	counts[5] = (map.get('f') ?? 0) - counts[4];
	counts[7] = (map.get('s') ?? 0) - counts[6];
	counts[9] = (map.get('i') ?? 0) - counts[5] - counts[6] - counts[8];
	// 去掉0，重复非0值N次
	return counts
		.map((count, index) => new Array(count).fill(index).join(''))
		.join('');
}

console.log(originalDigits('owoztneoer'));
console.log(originalDigits('fviefuro'));
console.log(originalDigits('fviufefrouro'));

console.log(originalDigitsBetter('fviufefrouro'));
