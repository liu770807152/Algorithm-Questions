/*
238.Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/
/** 不能用除法，又必须再O(N)内完成，必须使用动态规划：
 *  一个数组存储左边开始到当前数的乘积，另一个存储右边开始到当前数的乘积。
 *  这样算乘积的时候就直接取就可以了，不用遍历数组的其他数字。
 */
function productExceptSelf(nums: number[]): number[] {
	const prefix = Array(nums.length).fill(1), suffix = Array(nums.length).fill(1), result = [];
	for (let i = 0; i < nums.length - 1; i++) {
		prefix[i+1] = prefix[i] * nums[i];
	}
	for (let i = nums.length - 1; i > 0; i++) {
		suffix[i-1] = suffix[i] * nums[i];
	}
	for (let i = 0; i < nums.length; i++) {
		result.push(prefix[i] * suffix[i]);
	}
	return result;
};

/** 把空间复杂度优化成O(1): 不需要两个数组，只需要左边右边各算一遍 */
function productExceptSelf2(nums: number[]): number[] {
	const result = Array(nums.length).fill(1);
	let product = 1;
	for (let i = 0; i < nums.length; i++) {
		result[i] = result[i] * product;
		product *= nums[i];
	}
	product = 1;
	for (let i = nums.length - 1; i >= 0; i--) {
		result[i] = result[i] * product;
		product *= nums[i];
	}
	return result;
};