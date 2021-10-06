/*
122.You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. 
However, you can buy it then immediately sell it on the same day.
Find and return the maximum profit you can achieve.

Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
*/
/** 循环prices，如果在下跌就什么也不做；如果在上涨，则记录局部最小值，然后在顶部记录局部最大值，最后将收益加入结果中。 */
function maxProfit(prices: number[]): number {
	if (!prices.length)	 {
		return 0;
	}
	let maxProfit = 0, localMin = 0, localMax = 0;
	let i = 0;
	while (i < prices.length - 1) {
		// 下跌
		while (i < prices.length - 1 && prices[i] >= prices[i+1]) {
			i++;
		}
		localMin = prices[i];
		// 上涨
		while (i < prices.length - 1 && prices[i] <= prices[i+1]) {
			i++;
		}
		localMax = prices[i];
		maxProfit += localMax - localMin;
	}
	return maxProfit;
};

/** 贪心法：循环prices，如果明天比今天价更高，则立即计算利润并加入结果。 */
function maxProfitGreedy(prices: number[]): number {
	if (!prices.length)	 {
		return 0;
	}
	let maxProfit = 0;
	prices.forEach((price, index, prices) => {
		if (index < prices.length - 1 && price < prices[index + 1]) {
			maxProfit += prices[index + 1] - price;
		}
	})
	return maxProfit;
};