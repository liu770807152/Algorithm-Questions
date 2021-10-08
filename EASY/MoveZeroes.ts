/*
283.Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Input: nums = [0]
Output: [0]
*/

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
	let index = 0, length = nums.length;
	for (const num of nums) {
		if (num) {
			nums[index++] = num;
		}
	}
	while (index < length) {
		nums[index++] = 0;
	}
};

const arr = [0,1,0,3,12];
moveZeroes(arr);
console.log(arr);