/*
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, 
which minimizes the sum of all numbers along its path.
Note: You can only move either down or right at any point in time.

Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
Input: grid = [[1,2,3],[4,5,6]]
Output: 12
*/

function minPathSum(grid: number[][]): number {
	const dp: number[] = new Array(grid[0].length);
  dp[0] = grid[0][0];
  for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < dp.length; j++) {
			// 原点
      if (i === 0 && j === 0) {
        continue;
			}
			// 第一排
      if (i === 0) {
        dp[j] = dp[j-1] + grid[i][j];
        continue;
			} else if (j === 0) {
				// 第一列
        dp[j] = dp[j] + grid[i][j];
        continue;
      }
      dp[j] = Math.min(dp[j], dp[j-1]) + grid[i][j];
    }
  }
  return dp[dp.length-1];
};