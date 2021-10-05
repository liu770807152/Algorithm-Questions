function maxProfit(prices: number[]): number {
// 	if (prices.length === 0) {
// 		return 0;
// 	}
// 	// 可以像Java一样
// 	const dp = Array.from(Array(3), () => new Array(prices.length).fill(0));
// 	for (let i = 1; i < 3; i++) {
// 		let maxProfit: number = 0 - prices[0];
// 		for (let j = 1; j < prices.length; j++) {
// 			dp[i][j] = Math.max(dp[i][j-1], prices[j] + maxProfit);
// 			maxProfit = Math.max(maxProfit, dp[i-1][j] - prices[j]);
// 		}
// 	}
// 	return dp[2][prices.length-1];
// };