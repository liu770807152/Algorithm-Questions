/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/
/** 循环prices，求出当前的最小值和当前的最大利润。最后返回最大利润。 */
function maxProfit(prices: number[]): number {
	let tempMin = Number.MAX_SAFE_INTEGER, maxProfit = 0;
	for (const price of prices) {
		tempMin = Math.min(price, tempMin);
		maxProfit = Math.max(price - tempMin, maxProfit);
	}
	return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));