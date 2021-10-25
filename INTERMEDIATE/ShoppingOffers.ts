/*
638. In LeetCode Store, there are n items to sell. Each item has a price. 
However, there are some special offers, and a special offer consists of one or more different kinds of items with a sale price.
You are given an integer array price where price[i] is the price of the ith item, 
and an integer array needs where needs[i] is the number of pieces of the ith item you want to buy.
You are also given an array special where special[i] is of size n + 1 where special[i][j] is the number of pieces of the jth item in the ith offer 
and special[i][n] (i.e., the last integer in the array) is the price of the ith offer.
Return the lowest price you have to pay for exactly certain items as given, where you could make optimal use of the special offers. 
You are not allowed to buy more items than you want, even if that would lower the overall price. 
You could use any of the special offers as many times as you want.

Input: price = [2,5], special = [[3,0,5],[1,2,10]], needs = [3,2]
Output: 14
Explanation: There are two kinds of items, A and B. Their prices are $2 and $5 respectively. 
In special offer 1, you can pay $5 for 3A and 0B
In special offer 2, you can pay $10 for 1A and 2B. 
You need to buy 3A and 2B, so you may pay $10 for 1A and 2B (special offer #2), and $4 for 2A.
Input: price = [2,3,4], special = [[1,1,0,4],[2,2,1,9]], needs = [1,2,1]
Output: 11
Explanation: The price of A is $2, and $3 for B, $4 for C. 
You may pay $4 for 1A and 1B, and $9 for 2A ,2B and 1C. 
You need to buy 1A ,2B and 1C, so you may pay $4 for 1A and 1B (special offer #1), and $3 for 1B, $4 for 1C. 
You cannot add more items, though only $9 for 2A ,2B and 1C.
*/
/** 先根据价格排除不需要的大礼包，再使用动态规划，尝试使用每个大礼包，得到使用后的价格，和单买的价格比较。最终得到全局最低价格 */
function shoppingOffers(price: number[], special: number[][], needs: number[]): number {
	function dfs(memo: Map<number[], number>, price: number[], special: number[][], needs: number[], lastIndex: number): number {
		if (!memo.has(needs)) {
			// 得到原价，作为最大值
			let originalPrice = 0, bestPrice = 10000;
			price.forEach((price, index) => {
				originalPrice += price * needs[index];
			});
			for (const curSpecial of special) {
				// 先把数量超过需求量的大礼包丢弃
				let useNext = false;
				needs.forEach((curNum, index) => {
					if (curSpecial[index] > curNum) useNext = true;
				});
				if (useNext) continue;
				// 再从needs里减去大礼包的物品
				const reducedNeeds = needs.map((curNum, index) => {
					return curNum - curSpecial[index];
				});
				// 再递归得到用了当前大礼包后的价格，和原价比较得到最小值
				bestPrice = Math.min(bestPrice, dfs(memo, price, special, reducedNeeds, lastIndex) + curSpecial[lastIndex]);
			}
			memo.set(needs, bestPrice < originalPrice ? bestPrice : originalPrice);
		}
		return memo.get(needs);
	}
	const lastIndex: number = price.length,
		filteredSpecial: number[][] = [],
		originalPrice: number = price.reduce((prev, cur, index) => {
			return prev + cur * needs[index];
		}, 0);
	for (const curSpecial of special) {
		// 如果大礼包比单买还贵，就不要了
		if (originalPrice > curSpecial[lastIndex]) {
			filteredSpecial.push(curSpecial);
		}
	}
	return dfs(new Map(), price, filteredSpecial, needs, lastIndex);
};

console.log(shoppingOffers([2,5], [[3,0,5], [1,2,10]], [3,2]));
console.log(shoppingOffers([2,3,4], [[1,1,0,4],[2,2,1,9]], [1,2,1]));
console.log(shoppingOffers([3,4], [[1,2,3],[1,2,5]], [2,2]));