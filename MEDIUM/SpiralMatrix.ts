/*
54.Given an m x n matrix, return all elements of the matrix in spiral order.
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/
/** 方向顺序永远是右下左上，4个边界是：left:0, right:matrix[0].length-1, top:0, bottom:matrix.length-1。
 *  当左边界<=右边界，且上边界<=下边界时，执行while循环：按照右下左上的顺序，依次将路径上的字符追加进结果，同时触碰边界时更新边界值(+1) */
function spiralOrder(matrix: number[][]): number[] {
	let top = 0, left = 0, bottom = matrix.length - 1, right = matrix[0].length - 1;
	let direction = 'right';
	const result = [];

	while(left <= right && top <= bottom) {
		if (direction === 'right') {
			for (let i = left; i <= right; i++) {
				result.push(matrix[top][i]);
			}
			top++;
			direction = 'down';
		} else if (direction === 'down') {
			for (let i = top; i <= bottom; i++) {
				result.push(matrix[i][right]);
			}
			right--;
			direction = 'left';
		} else if (direction === 'left') {
			for (let i = right; i >= left; i--) {
				result.push(matrix[bottom][i]);
			}
			bottom--;
			direction = 'up';
		} else {
			for (let i = bottom; i >= top; i--) {
				result.push(matrix[i][left]);
			}
			left++;
			direction = 'right';
		}
	}
	return result;
};