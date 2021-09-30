/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
The robot can only move either down or right at any point in time. 
The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
How many possible unique paths are there?

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
Input: m = 3, n = 7
Output: 28
Input: m = 7, n = 3
Output: 28
*/
/** 建立一个二维DP Table，每个位置记录到达此点的路线数量，因此第一行和第一列都是1，剩下的位置将上方和左方的数相加。返回右小角的数即可 */
function uniquePaths(m: number, n: number): number {
	const memo: number[][] = [];
	let row = 0;
	while (row < m) {
		row === 0 ? memo.push(new Array(n).fill(1)) : memo.push(new Array(n).fill(0));
		memo[memo.length - 1][0] = 1;
		row++;
	}
	for (row = 1; row < m; row++) {
		for (let col = 1; col < n; col++) {
			memo[row][col] = memo[row - 1][col] + memo[row][col - 1];
		}
	}
	return memo[m - 1][n - 1];
};

console.log(uniquePaths(3, 3));