/*
695.You are given an m x n binary matrix grid. 
An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) 
You may assume all four edges of the grid are surrounded by water.
The area of an island is the number of cells with a value 1 in the island.
Return the maximum area of an island in grid. If there is no island, return 0.

Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.
Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0
*/

function maxAreaOfIsland(grid: number[][]): number {
	const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
	let maxSquare = 0;
	function sink(row: number, col: number, maxSquare: number = 0): number {
		if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] !== 1) {
			return maxSquare;
		}
		grid[row][col] = 0;
		maxSquare++;
		for (const [rowNext, colNext] of directions) {
			maxSquare = Math.max(sink(row + rowNext, col + colNext, maxSquare), maxSquare);
		}
		return maxSquare;
	}
	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[0].length; col++) {
			if (grid[row][col] === 1) {
				maxSquare = Math.max(sink(row, col), maxSquare);
			}
		}
	}
	return maxSquare;
};