/*
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/
/** 斐波那契数列的DP Table */
function climbStairs(n: number): number {
	if (n < 2) return 1;
	const memo: number[] = [];
	memo.push(1);
	memo.push(2);
	for (let i = 2; i < n; i++) {
		memo[i] = memo[i - 1] + memo[i - 2];
	}
	return memo[n - 1];
};

console.log(climbStairs(3));