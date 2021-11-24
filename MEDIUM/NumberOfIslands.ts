/*
200.Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/
/** 通用套路，沉没：
 *  遍历每一个位置，发现1则启动DFS: 往四周走，每次检查是否越界，然后检查是否是1，若是，改成0，重复该过程；若不是，什么都不做，直接返回。 */
function numIslands(grid: string[][]): number {
	const nextStep = [[-1, 0], [0, 1], [1, 0], [0, -1]];
	function sink(row: number, col: number) {
		if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === '0') {
			return;
		}
		grid[row][col] = '0';
		for (const [rowStep, colStep] of nextStep) {
			sink(row + rowStep, col + colStep);
		}
	}
	let count = 0;
	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[0].length; col++) {
			// 找到一块陆地
			if (grid[row][col] === '1') {
				count++;
				// 沉没
				sink(row, col);
			}
		}
	}
	return count;
};