/*
419.Given an m x n matrix board where each cell is a battleship 'X' or empty '.', return the number of the battleships on board.
Battleships can only be placed horizontally or vertically on board. 
In other words, they can only be made of the shape 1 x k (1 row, k columns) or k x 1 (k rows, 1 column), 
where k can be of any size. At least one horizontal or vertical cell separates between two battleships (i.e., there are no adjacent battleships).

Input: board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]
Output: 2
Input: board = [["."]]
Output: 0
*/
/** 和数岛的题类似，用沉没法。但是要注意沉没的时候只沉没水平方向或垂直方向 */
function countBattleships(board: string[][]): number {
	let count = 0;
	function sink(row: number, col: number, direction: string) {
		if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) return;
		if (board[row][col] === 'X') {
			board[row][col] = '.';
			switch (direction) {
				case 'horizontal':
					sink(row, col + 1, 'horizontal');
					break;
				case 'vertical':
					sink(row + 1, col, 'vertical');
					break;
				default:
					break;
			}
		}
	}
	for (let row = 0; row < board.length; row++) {
		for (let col = 0; col < board[0].length; col++) {
			if (board[row][col] === 'X') {
				count++;
				col < board[0].length - 1 && board[row][col+1] === 'X' ? sink(row, col, 'horizontal') : sink(row, col, 'vertical');
			}
		}
	}
	return count;
};

console.log(countBattleships([["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]));