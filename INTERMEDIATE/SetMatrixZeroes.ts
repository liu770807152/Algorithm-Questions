/*
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.
You must do it in place.

Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
*/

/**
 Do not return anything, modify matrix in-place instead.
 */
/** 先标记行和列，再修改。 */
function setZeroes(matrix: number[][]): void {
	const rows = new Set<number>(), cols = new Set<number>();
	const row = matrix.length, col = matrix[0].length;
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			matrix[i][j] === 0 && rows.add(i);
			matrix[i][j] === 0 && cols.add(j);
		}
	}
	rows.forEach((num) => matrix[num] = Array(col).fill(0));
	for (const arr of matrix) {
		cols.forEach((num) => arr[num] = 0);
	}
};

const matrix = [[0,0,0,5],[4,3,1,4],[0,1,1,4],[1,2,1,3],[0,0,1,1]];
console.log(matrix);
setZeroes(matrix);
console.log(matrix);