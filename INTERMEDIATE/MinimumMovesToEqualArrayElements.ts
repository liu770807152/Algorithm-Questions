/*
453. Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.
In one move, you can increment n - 1 elements of the array by 1.

Input: nums = [1,2,3]
Output: 3
Explanation: Only three moves are needed (remember each move increments two elements):
[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
Input: nums = [1,1,1]
Output: 0
*/
/** 暴力解法，超时 */
function minMoves(nums: number[]): number {
	let min = Math.min(...nums), max = Math.max(...nums), time = 0;
	while (min !== max) {
		let index = nums.findIndex(value => value === max);
		nums.map(value => value + 1);
		nums[index] -= 1;
		time++;
		max = Math.max(...nums);
		min = Math.min(...nums);
	}
	return time;
};

/** 换个角度，除了最大值，全部+1，和只把最大值-1是等效的。所以我们可以计算把所有最小值外的数减少成最小值需要的次数，而不是进行复杂的数组操作，把几乎全部数+1. */
function minMovesI(nums: number[]): number {
	if (!nums || !nums.length) return 0;
	let min = Math.min(...nums),
		sum = nums.reduce((prev, cur, index) => {
			return prev + cur;
		}, 0);
	return sum - min * nums.length;
};

console.log(minMoves([1,2,3]));