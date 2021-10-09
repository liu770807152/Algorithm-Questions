/*
733.An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc].
To perform a flood fill, consider the starting pixel, 
plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, 
plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. 
Replace the color of all of the aforementioned pixels with newColor.
Return the modified image after performing the flood fill.

Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), 
all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2
Output: [[2,2,2],[2,2,2]]
*/
/** sink沉没法，不过要注意新颜色和老颜色一样时，应该直接返回，不然会无限递归！ */
function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
	const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
	// const visited = Array.from(Array(image.length), () => new Array(image[0].length).fill(false));
	function fill(row: number, col: number, prev: number, newColor: number) {
		if (row < 0 || row >= image.length || col < 0 || col >= image[0].length || image[row][col] === newColor || image[row][col] !== prev) {
			return;
		}
		image[row][col] = newColor;
		// visited[row][col] = true;
		for (const [rowNext, colNext] of directions) {
			fill(row + rowNext, col + colNext, prev, newColor);
		}
	}
	// Recursion -> Iteration:
	// let stack = [{ r: sr, c: sc }];
	// while (stack.length) {
	// 	let { r, c } = stack.pop();
	// 	image[r][c] = newColor;
	// 	if (r-1 >= 0 && image[r-1][c] === color) stack.push({ r: r-1, c });
	// 	if (r+1 < m && image[r+1][c] === color) stack.push({ r: r+1, c });
	// 	if (c-1 >= 0 && image[r][c-1] === color) stack.push({ r, c: c-1 });
	// 	if (c+1 < n && image[r][c+1] === color) stack.push({ r, c: c+1 });
	// }
	fill(sr, sc, image[sr][sc], newColor);
	return image;
};