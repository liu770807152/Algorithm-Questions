/*
123.You are given an array prices where prices[i] is the price of a given stock on the ith day.
Find the maximum profit you can achieve. You may complete at most two transactions.
Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

Input: prices = [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/
/** 动态规划+优化 https://www.bilibili.com/video/BV1wA411b7qZ?p=23 */
function maxProfit(prices: number[]): number {
	if (prices.length === 0) {
		return 0;
	}
	// 可以像Java一样
	const dp = Array.from(Array(3), () => new Array(prices.length).fill(0));
	for (let i = 1; i < 3; i++) {
		let maxProfit: number = 0 - prices[0];
		for (let j = 1; j < prices.length; j++) {
			dp[i][j] = Math.max(dp[i][j-1], prices[j] + maxProfit);
			maxProfit = Math.max(maxProfit, dp[i-1][j] - prices[j]);
		}
	}
	return dp[2][prices.length-1];
};

/*
function maxProfit(prices: number[]): number {
	let fstBuy: number = -Number.MAX_SAFE_INTEGER;
	let fstSell: number = -Number.MAX_SAFE_INTEGER;
	let sndBuy: number = -Number.MAX_SAFE_INTEGER;
	let sndSell: number = -Number.MAX_SAFE_INTEGER;
	// 关键在于是否二次买入。由于第一次卖出时价格处于高位，导致后续价格下跌时，二次买入总是会更新，因此二次买入一定发生在一次卖出后！
	// 而二次买入一旦更新，哪怕一次卖出价格上涨，减去当前价格后总是低于之前的更新值，因此不受错误的一次卖出的影响。
	for (let i = 0; i < prices.length; i++) {
		// 首次买入，profit为0 - 买入价
		fstBuy = Math.max(fstBuy, 0 - prices[i]);
		// 首次卖出，profit为首次买入 + 当前价
		fstSell = Math.max(fstSell, fstBuy + prices[i]);
		// 二次买入，profit为首次卖出所得 - 当前价
		sndBuy = Math.max(sndBuy, fstSell - prices[i]);
		// 二次卖出，profit为二次买入后profit + 当前价
		sndSell = Math.max(sndSell, sndBuy + prices[i]);
		console.log(prices[i], fstBuy, fstSell, sndBuy, sndSell);
	}
	return sndSell;
};
*/

console.log(maxProfit([1,2,4,2,5,7,2,4,9,0]));
console.log(maxProfit([3,3,5,0,0,3,1,4]));
console.log(maxProfit([1,2,3,4,5]));
console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([1]));