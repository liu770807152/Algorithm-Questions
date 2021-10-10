/*
904. 
You are visiting a farm that has a single row of fruit trees arranged from left to right. 
The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.
You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

* You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
* Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. 
	The picked fruits must fit in one of your baskets.
* Once you reach a tree with fruit that cannot fit in your baskets, you must stop.

Given the integer array fruits, return the maximum number of fruits you can pick.

Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.
Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees [1,2,2].
If we had started at the first tree, we would only pick from trees [0,1].
Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can pick from trees [2,3,2,2].
If we had started at the first tree, we would only pick from trees [1,2].
Input: fruits = [3,3,3,1,2,1,1,2,3,3,4]
Output: 5
Explanation: We can pick from trees [1,2,1,1,2].
*/
/** 滑动窗口：后指针不断后移；因为window里只能由两种水果，当发现出现第三种水果时，前指针不断往后移动来关窗，直到window里只有两种水果；每次移动指针，计算它们的距离，存储最大值 */
function totalFruit(fruits: number[]): number {
	function containsTwoFruit(lst: number[]): boolean {
		return moveFruitsIntoSet(lst).size === 2;
	}
	function moveFruitsIntoSet(lst: number[]): Set<number> {
		const set: Set<number> = new Set();
		for (const fruit of lst) {
			set.add(fruit);
		}
		return set;
	}
	let front = 0, back = 0, max = 0, added = new Set();
	const window = [];
	while (front < fruits.length) {
		window.push(fruits[front]);
		added.add(fruits[front]);
		if (added.size <= 2) {
			max = Math.max(front - back + 1, max);
			front++;
		} else {
			while (!containsTwoFruit(window)) {
				back++;
				window.shift();
			}
			added = moveFruitsIntoSet(window);
			front++;
		}
	}
	return max;
};

/** 改进版滑动窗口：后指针不断后移；用map记录两种水果最后出现的位置，当发现出现第三种水果时，前指针移动到map里最小的value+1，更新map；每次移动指针，计算它们的距离，存储最大值 */
function totalFruitBetter(fruits: number[]): number {
	const map = new Map();
	let j = 0, max = 1;
	for (let i = 0; i < fruits.length; i++) {
		map.set(fruits[i], i);
		if (map.size > 2) {
			let minIndex = fruits.length - 1;
			for (const [fruit, index] of map) {
				if (index < minIndex) minIndex = index;
			}
			j = minIndex + 1;
			map.delete(fruits[minIndex]);
		} else {
			// 如果关窗了，窗口大小肯定小于当前最大距离
			max = Math.max(max, i - j + 1);
		}
	}
	return max;
};

console.log(totalFruit([5,9,0,9,6,9,6,9,9,9]));